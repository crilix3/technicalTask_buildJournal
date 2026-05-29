import type { IPagination } from "../IPagination";
import type { IRecord } from "./IRecord";

export interface IRecordData {
  recordsList: IRecord[];
  pagination: IPagination;
}
