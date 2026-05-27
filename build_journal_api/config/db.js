import { Pool } from "pg";
import { CONNECT_DB } from "../constants/db_constants.js";

const pool = new Pool(CONNECT_DB);

// async function checkConnection() {
//   try {
//     await pool.connect();
//     console.log("Успешное подключение к базе данных!");

//     // Простой тестовый запрос
//     const res = await pool.query("SELECT * FROM records");
//     console.log("Текущее время БД:", res.rows[0].now);
//   } catch (err) {
//     console.error("Ошибка подключения к БД:", err.message);
//   } finally {
//     await pool.end();
//   }
// }

// checkConnection();

export default pool;
