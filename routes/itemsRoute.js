import express from "express";
import { itemsGet } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", itemsGet);

export default router;
