import type { AxiosError } from "axios";
import mainStore from "../stores/mainStore";
import { loading } from "../types/loading";
import { query } from "./instanseAxios";
import type { IRecord } from "../types/dataTypes/IRecord";
import { LIMIT_ELEM } from "../constants/dataConst";
import type { IRecordData } from "../types/dataTypes/IRecordData";
import type { IPagination } from "../types/IPagination";

const getRecords = async (page: number) => {
  if (mainStore.recordList.loading === loading.LOADING) return;
  mainStore.setRecordListLoading(loading.LOADING);
  mainStore.setRecordListError("");
  try {
    const res = await query.get(`getRecords?page=${page}&limit=${LIMIT_ELEM}`);
    mainStore.setRecordListData((res.data as IRecordData).recordsList as IRecord[]);
    mainStore.setPagination((res.data as IRecordData).pagination as IPagination);
  } catch (e: unknown) {
    const error = e as AxiosError;
    mainStore.setRecordListError(error.message);
    mainStore.setRecordListLoading(loading.ERROR);
  }
  mainStore.setRecordListLoading(loading.LOADED);
};

export default getRecords;
