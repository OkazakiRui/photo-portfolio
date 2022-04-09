import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './genre';
import type { Methods as Methods1 } from './post';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/genre';
  const PATH1 = '/post';
  const GET = 'GET';

  return {
    genre: {
      get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) => fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods0['get']['query'] }
          | undefined,
      ) =>
        `${prefix}${PATH0}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    post: {
      get: (
        option?:
          | {
              query?: Methods1['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) => fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (
        option?:
          | {
              query?: Methods1['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods1['get']['query'] }
          | undefined,
      ) =>
        `${prefix}${PATH1}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
