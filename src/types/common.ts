export type ResponseType = {
  data: DataType;
};

export type DataType = {
  results: ResultsType[];
  num_results: number;
  status: string;
};
export type ResultsType = {
  abstract: string;
  id: number;
  media: MediaType[];
  title: string;
  url: string;
};

export type MediaType = {
  "media-metadata": {
    url: string;
  }[];
};
