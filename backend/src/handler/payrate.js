import Payrate from '../models/Payrate.js';

export const createPayrateHandler = async (payrateData) => {
    const { name, value, taxPercentage, type, amount } = payrateData;

    try {
        const payrate = new Payrate({
            name,
            value,
            taxPercentage,
            type,
            amount,
        });

        await payrate.save();
        console.log('Payrate created:', payrate);
    } catch (error) {
        console.error('Error creating payrate:', error);
    }
};

export const updatePayrateHandler = async (payrateData) => {
    const { id, name, value, taxPercentage, type, amount } = payrateData;

    try {
        const updatedPayrate = await Payrate.findByIdAndUpdate(
            id,
            { name, value, taxPercentage, type, amount },
            { new: true }
        );
        console.log('Payrate updated:', updatedPayrate);
    } catch (error) {
        console.error('Error updating payrate:', error);
    }
};

export const deletePayrateHandler = async (payrateData) => {
    const { id } = payrateData;

    try {
        const deletedPayrate = await Payrate.findByIdAndDelete(id);
        if (deletedPayrate) {
            console.log('Payrate deleted:', deletedPayrate);
        } else {
            console.log('Payrate not found');
        }
    } catch (error) {
        console.error('Error deleting payrate:', error);
    }
};
