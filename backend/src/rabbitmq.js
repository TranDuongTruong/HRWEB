import amqp from 'amqplib';
import { createJobHistoryHandler } from './handler/jobhistory.js';


const RABBITMQ_URL = "amqp://localhost:5672";


// Hàm gửi tin nhắn đến hàng đợi
export const sendMessageToQueue = async (channel, message) => {
    try {
        await channel.assertQueue('job_history_queue', { durable: true }); 
        await channel.sendToQueue('job_history_queue', Buffer.from(JSON.stringify(message)), { persistent: true }); 
        console.log('Message sent to queue:', message);
    } catch (error) {
        console.error('Error sending message to queue:', error);
    }
};


export const connectToQueue = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        console.log(`Connect to rabbitmq`)
        return channel;
    } catch (err) {
        console.log(err)

    }
};

// Hàm tiêu thụ tin nhắn từ hàng đợi
export const consumeMessageFromQueue = async (channel) => {
    try {
            await channel.assertQueue('job_history_queue', { durable: true });
            await channel.consume('job_history_queue', async (message) => {
            if (message !== null) {
                console.log('Received message from queue:', message.content.toString());
                const jobHistoryData = JSON.parse(message.content.toString());
                await createJobHistoryHandler(jobHistoryData);
                console.log('Job history added to database:', jobHistoryData);
                channel.ack(message);
            }
        });
        } catch (error) {
            console.error('Error consuming message from queue:', error);
        throw error;
    }
};
