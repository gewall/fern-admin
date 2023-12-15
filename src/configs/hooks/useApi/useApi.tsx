import { IApi, IRApi } from "./useApi.d";

const useApi = (props: IApi) => {
  const { apiUri } = props;
  const Get = async ({
    limit,
    skip,
  }: {
    limit?: number;
    skip?: number;
  }): Promise<IRApi> => {
    const req = await fetch(`${apiUri}?limit=${limit}&&skip=${skip}`, {
      method: "GET",
    });

    const res = await req.json();

    return {
      status: req.status,
      result: res,
    };
  };

  return { Get };
};

export default useApi;
