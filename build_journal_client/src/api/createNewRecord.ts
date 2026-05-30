import type { AxiosError } from "axios";
import mainStore from "../stores/mainStore";
import { query } from "./instanseAxios";
import getRecords from "./getRecords";

const isValidPayload = () => {
  if (!mainStore.roleIdValue || !mainStore.employerIdValue || !mainStore.workViewId || !mainStore.unitValue || !mainStore.unitIdValue) throw new Error("Введите все обязательные данные");
};

const createNewRecord = async () => {
  isValidPayload();
  const payload = {
    wvId: mainStore.workViewId,
    empId: mainStore.employerIdValue,
    roleid: mainStore.roleIdValue,
    unitId: mainStore.unitIdValue,
    unitVal: mainStore.unitValue,
    comments: mainStore.comment
  };
  try {
    const res = await query.post(`/createRecord`, payload);
    console.log(res.data);
    getRecords();
    mainStore.setCreateRecordIsActive(null);
    mainStore.setUpdateValues(null);
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.log(error.message);
  }
};

export default createNewRecord;
