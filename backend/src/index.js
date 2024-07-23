import express from "express";
import cors from "cors";
import filesRouter from "./files/files.router.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/files", filesRouter);

app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});