import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";

import authRouter from "./routes/auth.js";
import projectRouter from "./routes/project.js";
import designerRouter from "./routes/designer.js";
import teamRouter from "./routes/team.js";

const app = express();
const PORT = 8080;

app.set(PORT);
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/projects", projectRouter);
app.use("/designers", designerRouter);
app.use("/teampanel", teamRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});
