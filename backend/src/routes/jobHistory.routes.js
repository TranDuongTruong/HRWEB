import { Router } from "express";
import { createJobHistory, deleteJobHistory, getJobHistory, getJobHistoryById, updateJobHistory } from "../controllers/jobHistory.controller.js";


const router = Router();
router.get("/", getJobHistory);

router.get("/:jobHistoryId", getJobHistoryById);

router.post("/", createJobHistory);
router.put("/:jobHistoryId", updateJobHistory);

router.delete("/:jobHistoryId", deleteJobHistory);


export default router;
