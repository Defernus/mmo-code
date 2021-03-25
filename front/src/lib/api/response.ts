export enum ResponseStatus {
  Failed = "failed",
  Success = "success",
}

interface ResponseError {
  code: string;
  param: string;
  message: string;
  location?: string;
}

export interface Response<T> {
  errors: ResponseError[];
  result: T;
  status: ResponseStatus;
}
