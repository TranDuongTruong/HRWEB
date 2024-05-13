import mongoose from 'mongoose';

const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/ApiCompnyLog";
// Tạo một kết nối MongoDB mới để lưu model FailedChange
const newDBConnection = mongoose.createConnection(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Tạo Schema cho model FailedChange
const FailedChangeSchema = new mongoose.Schema({
    data: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    operation: {
        type: String,
        required: true
    }
});

// Tạo model FailedChange sử dụng kết nối mới
const FailedChange = newDBConnection.model('FailedChange', FailedChangeSchema);

export default FailedChange;
