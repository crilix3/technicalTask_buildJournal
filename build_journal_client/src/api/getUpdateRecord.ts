import type { AxiosError } from "axios";
import { query } from "./instanseAxios";
import mainStore from "./../stores/mainStore";
import type { IUpdateRecord } from "../types/dataTypes/IUpdateRecord";
import { loading } from "../types/loading";

const getUpdateRecord = async (id: number) => {
  if (mainStore.updateRecordData.loading === loading.LOADING) return;
  mainStore.setUpdateRecordLoading(loading.LOADING);
  mainStore.setUpdateRecordError("");
  try {
    const res = await query.get(`getUpdateRecord?id=${id}`);
    mainStore.setUpdateRecordData(res.data as IUpdateRecord);
    mainStore.setUpdateValues(res.data as IUpdateRecord);
    mainStore.setCreateRecordIsActive("update");
  } catch (e: unknown) {
    const error = e as AxiosError;
    mainStore.setUpdateRecordError(error.message);
    mainStore.setUpdateRecordLoading(loading.ERROR);
  }
  mainStore.setUpdateRecordLoading(loading.LOADED);
};

export default getUpdateRecord;
