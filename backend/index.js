import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";

const app = express();
const PORT = 8080;

app.set(PORT);
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});
