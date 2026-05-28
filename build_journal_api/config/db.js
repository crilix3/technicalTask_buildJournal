import { Pool } from "pg";
import { CONNECT_DB } from "../constants/db_constants.js";

const pool = new Pool(CONNECT_DB);

export default pool;
