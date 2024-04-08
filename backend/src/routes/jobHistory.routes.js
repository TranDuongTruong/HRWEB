import { Router } from "express";
import { createJobHistory, deleteJobHistory, getJobHistory, getJobHistoryById, getPaginationJobHistory, updateJobHistory } from "../controllers/jobHistory.controller.js";


const router = Router();
router.get("/", getPaginationJobHistory);

router.get("/", getJobHistory);


router.get("/:jobHistoryId", getJobHistoryById);

router.post("/", createJobHistory);
router.put("/:jobHistoryId", updateJobHistory);

router.delete("/:jobHistoryId", deleteJobHistory);


export default router;
