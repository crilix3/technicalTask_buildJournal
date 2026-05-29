import type { AxiosError } from "axios";
import mainStore from "../stores/mainStore";
import { loading } from "../types/loading";
import { query } from "./instanseAxios";
import type { IEmployesList } from "../types/dataTypes/IEmployesList";

const getEmployes = async () => {
  if (mainStore.employesList.loading === loading.LOADING) return;
  mainStore.setEmployesListLoading(loading.LOADING);
  mainStore.setEmployesListError("");
  try {
    const res = await query.get(`/getEmployers`);

    mainStore.setEmployesList(res.data.employesList as IEmployesList[]);
    return res.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    mainStore.setEmployesListError(error.message);
    mainStore.setEmployesListLoading(loading.ERROR);
  }
  mainStore.setEmployesListLoading(loading.LOADED);
};

export default getEmployes;
