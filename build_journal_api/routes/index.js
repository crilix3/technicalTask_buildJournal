import express from "express";
const router = express.Router();
import { getRecords, createRecords } from "../controllers/buildJournalController.js";

router.get("/records", getRecords);
// router.post("/records", buildJournalController.createRecords);
// router.put("/records", buildJournalController.uppdateRecords);
// router.delete("/records", buildJournalController.deleteRecords);

router.get("/workview", createRecords);

export default router;
