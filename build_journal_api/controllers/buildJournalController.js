import pool from "../config/db.js";

const getRecords = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT * FROM public.category
      `,
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

const createRecords = async (req, res) => {
  // const {};
  try {
    const resust = await pool.query(`SELECT * FROM public.category`);
    res.status(200).json(result.rows);
  } catch (err) {}
};

export { getRecords, createRecords };
