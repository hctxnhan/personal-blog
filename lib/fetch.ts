import { environment } from './environment';

type FetchParameters = Parameters<typeof fetch>;

interface FetchResponse<T> extends Response {
  getData: Promise<FetchData<T>>;
}

export interface DataEntry<T> {
  id: number;
  attributes: T;
}

export type DataSingle<T> = {
  data: DataEntry<T>;
};

export type DataCollection<T> = {
  data: DataEntry<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type FetchData<T> = T extends any[]
  ? DataCollection<T extends (infer U)[] ? U : never>
  : DataSingle<T>;

export const customFetch = async <T>(
  url: FetchParameters[0],
  options?: FetchParameters[1]
): Promise<FetchResponse<T>> => {
  const constructedUrl = `${environment.api.url}/${url}`;
  const authorization = `Bearer ${environment.api.token}`;

  const response = (await fetch(constructedUrl, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: authorization
    }
  })) as FetchResponse<T>;
  response.getData = response.json();
  return response;
};
