import express from "express";
import {
  deleteJob,
  getAlljob,
  getmyJobs,
  postJob,
  updateJobe,
} from "../controllers/jobontroller.js";
import { isAuthorized } from "../middlewares/authMiddle.js";

const router = express.Router();

router.get("/getAll", getAlljob);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getmyJobs);
router.put("/update/:id", isAuthorized, updateJobe);
router.delete("/delete/:id", isAuthorized, deleteJob);

export default router;
