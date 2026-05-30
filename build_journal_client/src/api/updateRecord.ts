import type { AxiosError } from "axios";
import { query } from "./instanseAxios";
import mainStore from "../stores/mainStore";
import getRecords from "./getRecords";

const isValidPayload = () => {
  if (!mainStore.roleIdValue || !mainStore.employerIdValue || !mainStore.workViewId || !mainStore.unitValue || !mainStore.unitIdValue) {
    mainStore.setCreateRecordError("Введите все обязательные данные");
    throw new Error("Введите все обязательные данные");
  }
};

const updateRecord = async () => {
  if (!mainStore.updateRecordData.data) return;
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
    const res = await query.put(`updateRecords?id=${mainStore.updateRecordData.data?.id}`, payload);
    console.log(res.data);
    getRecords();
    mainStore.setCreateRecordIsActive(null);
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.log(error.message);
  }
};

export default updateRecord;
