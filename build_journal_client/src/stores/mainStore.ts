import { makeAutoObservable } from "mobx";
import { loading } from "../types/loading";
import type { IGeneral } from "../types/IGeneral";
import type { IRecord } from "../types/dataTypes/IRecord";
import type { IPagination } from "../types/IPagination";
import type { IEmployesList } from "../types/dataTypes/IEmployesList";
import type { IRoleList } from "../types/dataTypes/IRoleList";
import type { ICatOfWorkList } from "../types/dataTypes/ICatOfWorkList";
import type { IWorkViewList } from "../types/dataTypes/IWorkViewList";
import type { IUnitTypesList } from "../types/dataTypes/IUnitTypesList";
import type { IUpdateRecord } from "../types/dataTypes/IUpdateRecord";

const INITIAL_DATA = { loading: loading.NONE, error: "", data: null };

class MainStore {
  recordList: IGeneral<IRecord[] | null> = INITIAL_DATA;
  employesList: IGeneral<IEmployesList | null> = INITIAL_DATA;
  roleList: IGeneral<IRoleList | null> = INITIAL_DATA;
  categorieOfWorkList: IGeneral<ICatOfWorkList | null> = INITIAL_DATA;
  workViewList: IGeneral<IWorkViewList | null> = INITIAL_DATA;
  unitTypesList: IGeneral<IUnitTypesList | null> = INITIAL_DATA;
  updateRecordData: IGeneral<IUpdateRecord | null> = INITIAL_DATA;

  roleIdValue: number = 0;
  employerIdValue: number = 0;
  workViewId: number = 0;
  categoryOfWorkId: number = 0;
  unitValue: number = 0;
  unitIdValue: number = 0;
  comment: string = "";

  pagination: IPagination | null = null;
  page: number = 1;

  loadingCreatedData: boolean = false;

  createRecordIsActive: string | null = null;

  createRecordError: string = "";

  constructor() {
    makeAutoObservable(this);
  }
  //#region recordList
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
  //#endregion

  //#region updateData
  setUpdateRecordData(data: IUpdateRecord | null) {
    this.updateRecordData.data = data;
  }
  setUpdateRecordLoading(loading: loading) {
    this.updateRecordData.loading = loading;
  }
  setUpdateRecordError(error: string) {
    this.updateRecordData.error = error;
  }
  //#endregion

  setPagination(pagination: IPagination | null) {
    this.pagination = pagination;
  }

  setCreateRecordIsActive(isActive: string | null) {
    this.createRecordIsActive = isActive;
  }

  setEmployerIdValue(value: number) {
    this.employerIdValue = value;
  }

  setRoleIdValue(value: number) {
    this.roleIdValue = value;
  }
  setWorkViewId(value: number) {
    this.workViewId = value;
  }
  setCategoryOfWorkId(value: number) {
    this.categoryOfWorkId = value;
  }
  setUnitIdValue(value: number) {
    this.unitIdValue = value;
  }
  setUnitValue(value: number) {
    this.unitValue = value;
  }
  setComment(value: string) {
    this.comment = value;
  }

  setUpdateValues(data: IUpdateRecord | null) {
    if (!data) {
      return ((this.roleIdValue = 0), (this.employerIdValue = 0), (this.workViewId = 0), (this.unitIdValue = 0), (this.unitValue = 0), (this.comment = ""));
    }
    this.roleIdValue = data.roleid;
    this.employerIdValue = data.employeid;
    this.workViewId = data.workviewid;
    this.unitIdValue = data.unitid;
    this.unitValue = data.volumeofwork;
    this.comment = data.comment;
  }

  setPage(page: number) {
    this.page = page;
  }

  setCreateRecordError(error: string) {
    console.log(error);

    this.createRecordError = error;
  }
}

const mainStore = new MainStore();
export default mainStore;
