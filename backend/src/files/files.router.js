import express from "express";
import { getFilesData, getFilesList } from "./files.controller.js";

const router = express.Router();
router.get("/data", getFilesData);
router.get("/list", getFilesList);

export default router;
