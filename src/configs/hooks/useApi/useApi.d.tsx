export interface IApi {
  apiUri: string;
  body?: any;

  //   method: "GET" | "POST" | "PUT" | "DELETE";
}

export interface IRApi {
  status: number;
  result: any;
}
