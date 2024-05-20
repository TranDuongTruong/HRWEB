import amqp from 'amqplib';


import {
    createPayrateHandler,
    updatePayrateHandler,
    deletePayrateHandler
} from './handler/payrate.js';

const RABBITMQ_URL = "amqp://localhost:5672";

let channel = null;

export const connectToQueue = async () => {
    try {
        if (!channel) {
            const connection = await amqp.connect(RABBITMQ_URL);
            channel = await connection.createChannel();
            console.log(`Connected to RabbitMQ`);
        }
        return channel;
    } catch (err) {
        console.error('Failed to connect to RabbitMQ', err);
    }
};

export const sendMessageToQueue = async (queue, message) => {
    try {
        await channel.assertQueue(queue, { durable: true });
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
        console.log(`Message sent to ${queue}:`, message);
    } catch (error) {
        console.error(`Error sending message to ${queue}:`, error);
    }
};

export const consumeMessageFromQueue = async (queue) => {
    try {
        await channel.assertQueue(queue, { durable: true });
        await channel.consume(queue, async (message) => {
            if (message !== null) {
                const content = message.content.toString();
                console.log(`Received message from ${queue}:`, content);
                const data = JSON.parse(content);
                await handleMessage(data, queue);
                channel.ack(message);
            }
        });
    } catch (error) {
        console.error(`Error consuming message from ${queue}:`, error);
        throw error;
    }
};

const handleMessage = async (data, queue) => {
    if (queue === 'payrate_queue') {
        if (data.action === 'create') {
            await createPayrateHandler(data);
        } else if (data.action === 'update') {
            await updatePayrateHandler(data);
        } else if (data.action === 'delete') {
            await deletePayrateHandler(data);
        }
    }
};
