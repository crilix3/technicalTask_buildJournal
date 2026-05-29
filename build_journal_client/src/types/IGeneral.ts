import { loading } from "./loading";

export interface IGeneral<T> {
  loading: loading;
  error: string;
  data: T | null;
}
