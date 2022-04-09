import { MicroCMSQueries } from 'microcms-js-sdk';
import { CommonItem, CommonList } from 'apis/types';
import { Genre } from 'apis/genre';

type Photo = {
  url: string;
  height: number;
  width: number;
};

export type PostItem = CommonItem & {
  title: string;
  favorite: boolean;
  shootingDate: string;
  genre: Genre[];
  photo: Photo;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: CommonList<PostItem>;
  };
};
