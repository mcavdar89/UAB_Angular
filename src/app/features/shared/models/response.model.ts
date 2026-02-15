export interface ResponseModel<T> {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data?: T;
}
