import axios, { AxiosError } from 'axios';
import { useQuery as useRQ, UseQueryOptions } from 'react-query';

export namespace GetGithubUserQuery {
  export type Params = {};

  export type Response = any; // TODO:

  export const key = ['github', 'user'];

  export const getKey = (params: Params) => [...key, params];

  export const queryFn = (_params: Params) =>
    axios.get<Response>(`https://localhost:9090/users`).then(res => res.data);

  export const useQuery = (
    params: Params,
    options: UseQueryOptions<Response, AxiosError> = {},
  ) => {
    return useRQ<Response, AxiosError>(getKey(params), () => queryFn(params), {
      ...options,
    });
  };
}
