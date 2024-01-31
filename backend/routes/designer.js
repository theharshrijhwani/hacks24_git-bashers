import express from "express"; 
import { newDesigner } from "../controllers/designer";

const router = express.Router();

router.post("/new" , newDesigner);

