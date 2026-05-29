import express from "express";
import pool from "./config/db.js";
import { APP_PORT } from "./constants/app_constants.js";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = APP_PORT || 3000;
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
