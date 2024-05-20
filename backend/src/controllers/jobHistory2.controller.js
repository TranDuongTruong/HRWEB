import sql from 'mssql'
import sqlConfig from '../sqlConfig.js'
import { connectToQueue, consumeMessageFromQueue, sendMessageToQueue } from '../rabbitmq.js';

// Function lấy tất cả các bản ghi Job_History
export const getAllJobHistories = async (req, res) => {
    try {
        let pool = await sql.connect(sqlConfig);
        let result = await pool.request().query('SELECT * FROM Job_History');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const getPaginationJobHistory = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().query(`
        SELECT j.*, e.First_Name, e.Last_Name
        FROM (
            SELECT ROW_NUMBER() OVER (ORDER BY ID) AS RowNum, * 
            FROM Job_History
        ) AS j
        INNER JOIN Personal e ON j.Employee_ID = e.Employee_ID
        WHERE j.RowNum BETWEEN ${(page - 1) * limit + 1} AND ${page * limit}
    `);
        const jobHistories = result.recordset;
        const totalJobHistories = await pool.request().query('SELECT COUNT(*) AS TotalCount FROM Job_History');
        const totalPages = Math.ceil(totalJobHistories.recordset[0].TotalCount / limit);

        res.json({
            totalJobHistories: totalJobHistories.recordset[0].TotalCount,
            totalPages,
            currentPage: page,
            jobHistories,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const getJobHistoryById = async (req, res) => {
    const id = req.params.jobHistoryId;

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input('id', sql.Decimal, id)
            .query(`
                SELECT j.*, e.First_Name, e.Last_Name
                FROM Job_History j
                INNER JOIN Personal e ON j.Employee_ID = e.Employee_ID
                WHERE j.ID = @id
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: 'Job history not found' });
        }

        res.json(result.recordset[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


export const createJobHistory = async (req, res) => {
    try {
        const newJobHistory = req.body;
        newJobHistory.action = 'create';

        const channel = await connectToQueue();
        await sendMessageToQueue('job_history_queue', newJobHistory);
        await consumeMessageFromQueue('job_history_queue');

        res.json({ success: true, message: "Job history created successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while creating job history." });
    }
};

export const updateJobHistoryById = async (req, res) => {
    try {
        const updatedJobHistory = { ...req.body, id: req.params.jobHistoryId, action: 'update' };

        const channel = await connectToQueue();
        await sendMessageToQueue('job_history_queue', updatedJobHistory);
        await consumeMessageFromQueue('job_history_queue');

        res.json({ success: true, message: "Job history updated successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while updating job history." });
    }
};

export const deleteJobHistory = async (req, res) => {
    try {
        const deleteData = { id: req.params.jobHistoryId, action: 'delete' };

        const channel = await connectToQueue();
        await sendMessageToQueue('job_history_queue', deleteData);
        await consumeMessageFromQueue('job_history_queue');

        res.json({ success: true, message: "Job history deleted successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while deleting job history." });
    }
};
