import Payrate from '../models/Payrate.js'
import { connectToQueue, sendMessageToQueue, consumeMessageFromQueue } from '../rabbitmq.js';

export const getPayrates = async (req, res, next) => {
    const payrates  = await Payrate.find();
    return res.json({ success: true, data: payrates });
};
export const getPayrate = async (req, res, next) => {
    const payrate = await Payrate.findById(req.params.payrateId);
    return res.json({ success: true, data: payrate });
};
export const createPayrate = async (req, res) => {
    try {
        const newPayrate = req.body;
        newPayrate.action = 'create';

        const channel = await connectToQueue();
        await sendMessageToQueue('payrate_queue', newPayrate);
        await consumeMessageFromQueue('payrate_queue');

        res.json({ success: true, message: "Payrate created successfully." });
    } catch (error) {
        console.error('Error creating payrate:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const updatePayrate = async (req, res) => {
    try {
        const updatedPayrate = { ...req.body, id: req.params.payrateId, action: 'update' };

        const channel = await connectToQueue();
        await sendMessageToQueue('payrate_queue', updatedPayrate);
        await consumeMessageFromQueue('payrate_queue');

        res.json({ success: true, message: "Payrate updated successfully." });
    } catch (error) {
        console.error('Error updating payrate:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const deletePayrate = async (req, res) => {
    try {
        const deleteData = { id: req.params.payrateId, action: 'delete' };

        const channel = await connectToQueue();
        await sendMessageToQueue('payrate_queue', deleteData);
        await consumeMessageFromQueue('payrate_queue');

        res.json({ success: true, message: "Payrate deleted successfully." });
    } catch (error) {
        console.error('Error deleting payrate:', error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
export const getPaginationPayrate = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    try {
      const payrates = await Payrate.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
  
      res.json({
        totalPayrates: await Payrate.countDocuments(),
        totalPages: Math.ceil(await Payrate.countDocuments() / limit),
        currentPage: page,
        payrates,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };