import type { AxiosError } from "axios";
import { query } from "./instanseAxios";
import getRecords from "./getRecords";

const deleteRecord = async (id: number) => {
  try {
    const res = await query.delete(`deleteRecord?id=${id}`);
    console.log(res.data);
    getRecords();
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.log(error.message);
  }
};

export default deleteRecord;
