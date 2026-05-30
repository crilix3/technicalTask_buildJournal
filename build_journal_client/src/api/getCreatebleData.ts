import type { AxiosError } from "axios";
import { query } from "./instanseAxios";
import { action } from "mobx";
import mainStore from "../stores/mainStore";

interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
}

export interface QueryResult<T = any> {
  name: string;
  data: T | null;
  error: ApiError | null;
  store: T | null;
}

const getCreatebleData = async () => {
  mainStore.loadingCreatedData = true;
  const endpoints = [
    { name: "roleList", url: "/getRole", store: mainStore.roleList },
    { name: "employesList", url: "/getEmployers", store: mainStore.employesList },
    // { name: "categorieOfWorkList", url: "/getCategoriesOfWork", store: mainStore.categorieOfWorkList },
    { name: "unitTypesList", url: "/getUnitTypes", store: mainStore.unitTypesList },
    { name: "workViewList", url: "/getWorkView", store: mainStore.workViewList }
  ];
  const promises = endpoints.map(async (endpoint): Promise<QueryResult> => {
    try {
      const res = await query.get(endpoint.url);
      return { name: endpoint.name, data: res.data, error: null, store: endpoint.store };
    } catch (e: unknown) {
      const error = e as AxiosError;
      return {
        name: endpoint.name,
        data: null,
        store: null,
        error: {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText
        }
      };
    }
  });
  const results = await Promise.all(promises);

  action(() => {
    results.forEach((result) => {
      if (result.error) {
        result.store.error = result.error;
        result.store.data = null;
      } else {
        result.store.data = result.data;
        result.store.error = null;
      }
    });
    mainStore.loadingCreatedData = false;
  })();
};

export default getCreatebleData;
