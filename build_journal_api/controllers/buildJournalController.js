import pool from "../config/db.js";

const getRecords = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
	        r.record_time AS Date,
	        wv.value AS WorkView,
	        r.unutvalue AS UnitValue,
	        e.surname AS SureName,
	        e.name AS Name,
	        e.middlename AS MiddleName
      FROM 
	        public.records r
	        INNER JOIN workview wv ON r.workviewid = wv.id
	        INNER JOIN employers e ON r.employeid = e.id
      `,
    );
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);

    res.status(500).json({ error: e.message, code: e.code });
  }
};
const createRecord = async (req, res) => {
  const { timeStamp, wvId, empId, unitId, unitVal, comments, roleid } = req.body;
  const dateObj = new Date(timeStamp);
  try {
    const result = await pool.query(
      `
      INSERT INTO 
        public.records (
          workviewid,
          employeid,
          unutid,
          unutvalue,
          comment,
          roleid
        ) 
      VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *
      `,
      [wvId, empId, unitId, unitVal, comments, roleid],
    );
    res.status(201).json({ message: "Record created !", statusCode: 201 });
  } catch (e) {
    console.log(e);
    if (e.code === "22P02") res.status(500).json({ error: "Bad request", code: 400 });
    res.status(500).json({ error: e.message, code: e.code });
  }
};
const updateRecords = async (req, res) => {
  const { id } = req.params;
  const { wvId, empId, unitId, unitVal, comments, roleid } = req.body;
  try {
    const result = await pool.query(
      `
        UPDATE public.records
        SET 
            workviewid = $1,
            employeid = $2,
            unutid = $3,
            unutvalue = $4,
            comment = $5,
            roleid = $6
        WHERE id = $7
      `,
      [wvId, empId, unitId, unitVal, comments, roleid, id],
    );
    res.status(200).json({ message: "Updated successfully", statusCode: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`DELETE FROM public.records WHERE id = $1`, [id]);
    res.status(200).json({ message: "Removed successfully", statusCode: 204 });
  } catch (e) {
    console.log(e);
    res.status.json({ error: e.message, code: e.code });
  }
};

const getEmployers = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.employers`);
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const getRole = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.role`);
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const getCategoriesOfWork = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.category`);
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const getWorkView = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.workview`);
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const getUnitTypes = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.unittypes`);
    res.status(200).json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message, code: e.code });
  }
};

export { getRecords, getEmployers, getRole, getCategoriesOfWork, getWorkView, getUnitTypes, createRecord, updateRecords, deleteRecord };
