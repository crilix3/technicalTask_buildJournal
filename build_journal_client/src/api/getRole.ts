import type { AxiosError } from "axios";
import mainStore from "../stores/mainStore";
import { loading } from "../types/loading";
import { query } from "./instanseAxios";
import type { IRoleList } from "../types/dataTypes/IRoleList";

const getRole = async () => {
  if (mainStore.employesList.loading === loading.LOADING) return;
  mainStore.setRoleLoading(loading.LOADING);
  mainStore.setRoleError("");
  try {
    const res = await query.get(`/getEmployers`);

    mainStore.setRoleList(res.data as IRoleList);
    return res.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    mainStore.setRoleError(error.message);
    mainStore.setRoleLoading(loading.ERROR);
  }
  mainStore.setRoleLoading(loading.LOADED);
};

export default getRole;
