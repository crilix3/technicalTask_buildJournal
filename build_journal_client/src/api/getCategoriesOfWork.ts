import type { AxiosError } from "axios";
import mainStore from "../stores/mainStore";
import { loading } from "../types/loading";
import { query } from "./instanseAxios";
import type { ICatOfWorkList } from "../types/dataTypes/ICatOfWorkList";

const getCategoriesOfWork = async () => {
  if (mainStore.employesList.loading === loading.LOADING) return;
  mainStore.setCategorieOfWorkLoading(loading.LOADING);
  mainStore.setCategorieOfWorkError("");
  try {
    const res = await query.get(`/getEmployers`);

    mainStore.setCategorieOfWorkList(res.data as ICatOfWorkList);
    return res.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    mainStore.setCategorieOfWorkError(error.message);
    mainStore.setCategorieOfWorkLoading(loading.ERROR);
  }
  mainStore.setCategorieOfWorkLoading(loading.LOADED);
};

export default getCategoriesOfWork;
