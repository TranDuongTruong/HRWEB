import JobHistory from '../models/Job_History.js'

export const getJobHistory = async (req, res, next) => {
    const jobHistory  = await JobHistory.find();
    return res.json({ success: true, data: jobHistory });
};

export const createJobHistory= async (req, res) => {
    try {

        const jobHistory = new JobHistory(req.body);

        const savedJobHistory = await jobHistory.save();

        return res.status(200).json({
            success: true, data: {
                savedJobHistory
            }
        });
    } catch (error) {
        console.error({success: true, data: error});
    }
};

export const getJobHistoryById = async (req, res, next) => {
    const jobHistory = await JobHistory.findById(req.params.jobHistoryId);
    return res.json({ success: true, data: jobHistory });
};
export const deleteJobHistory = async (req, res, next) => {
    try {
        const jobHistory = await JobHistory.findByIdAndDelete(req.params.jobHistoryId);
        if (!jobHistory) {
            return res.status(404).json({ success: false, message: "JobHistory not found" });
        }
        return res.status(200).json({ success: true, message: "JobHistory deleted successfully" });
    } catch (error) {
        console.error({ success: false, data: error });
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const updateJobHistory = async (req, res, next) => {
    try {
        const updatedJobHistory= await JobHistory.findByIdAndUpdate(
            req.params.jobHistoryId,
            req.body,
            { new: true }
        );
        if (!updatedJobHistory) {
            return res.status(404).json({ success: false, message: "JobHistory not found" });
        }
        return res.status(200).json({ success: true, data: updatedJobHistory });
    } catch (error) {
        console.error({ success: false, data: error });
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
