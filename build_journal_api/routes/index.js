import express from "express";
const router = express.Router();
import { getRecords, getEmployers, getRole, getCategoriesOfWork, getWorkView, getUnitTypes, createRecord, updateRecords, deleteRecord, getUpdateRecord } from "../controllers/buildJournalController.js";

router.get("/getRecords", getRecords);
router.get("/getUpdateRecord", getUpdateRecord);
router.post("/createRecord", createRecord);
router.put("/updateRecords", updateRecords);
router.delete("/deleteRecord", deleteRecord);

router.get("/getEmployers", getEmployers); //GET A LIST OF EMPLOYEES

router.get("/getRole", getRole); //GET LIST ROLES

router.get("/getCategoriesOfWork", getCategoriesOfWork); //GET LIST CATEGORIES OF WORK

router.get("/getWorkView", getWorkView); //GET A LIST OF WORKS

router.get("/getUnitTypes", getUnitTypes); //GET A LIST OF UNITS OF MEASUREMENT

export default router;
