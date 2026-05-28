import express from "express";
import pool from "./config/db.js";
import { APP_PORT } from "./constants/app_constants.js";
import router from "./routes/index.js";

const app = express();
const PORT = APP_PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
