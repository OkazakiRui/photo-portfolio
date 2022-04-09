import { CommonItem, CommonList } from 'apis/types';
import { MicroCMSQueries } from 'microcms-js-sdk';

export type GenreItem = CommonItem & {
  genreName: string;
  genreJPName: string;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: CommonList<GenreItem>;
  };
};
