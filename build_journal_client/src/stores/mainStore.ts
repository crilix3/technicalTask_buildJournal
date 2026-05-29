import { makeAutoObservable } from "mobx";
import { loading } from "../types/loading";
import type { IGeneral } from "../types/IGeneral";
import type { IRecord } from "../types/dataTypes/IRecord";
import type { IPagination } from "../types/IPagination";
import type { IEmployesList } from "../types/dataTypes/IEmployesList";
import type { IRoleList } from "../types/dataTypes/IRoleList";
import type { ICatOfWorkList } from "../types/dataTypes/ICatOfWorkList";

const INITIAL_DATA = { loading: loading.NONE, error: "", data: null };

class MainStore {
  recordList: IGeneral<IRecord[] | null> = INITIAL_DATA;
  employesList: IGeneral<IEmployesList[] | null> = INITIAL_DATA;
  roleList: IGeneral<IRoleList | null> = INITIAL_DATA;
  categorieOfWorkList: IGeneral<ICatOfWorkList | null> = INITIAL_DATA;

  pagination: IPagination | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  setRecordListData(data: IRecord[] | null) {
    console.log(data);

    this.recordList.data = data;
  }
  setRecordListLoading(loading: loading) {
    this.recordList.loading = loading;
  }
  setRecordListError(error: string) {
    this.recordList.error = error;
  }

  setEmployesList(data: IEmployesList[] | null) {
    this.employesList.data = data;
  }
  setEmployesListLoading(loading: loading) {
    this.employesList.loading = loading;
  }
  setEmployesListError(error: string) {
    this.employesList.error = error;
  }

  setRoleList(data: IRoleList | null) {
    this.roleList.data = data;
  }
  setRoleLoading(loading: loading) {
    this.roleList.loading = loading;
  }
  setRoleError(error: string) {
    this.roleList.error = error;
  }

  setCategorieOfWorkList(data: ICatOfWorkList | null) {
    this.categorieOfWorkList.data = data;
  }
  setCategorieOfWorkLoading(loading: loading) {
    this.categorieOfWorkList.loading = loading;
  }
  setCategorieOfWorkError(error: string) {
    this.categorieOfWorkList.error = error;
  }

  setPagination(pagination: IPagination | null) {
    this.pagination = pagination;
  }
}

const mainStore = new MainStore();
export default mainStore;
