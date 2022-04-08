export type CommonItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type CommonList<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
