import { environment } from './environment';

type FetchType = typeof fetch;

export const customFetch: FetchType = async (url, options) => {
  const constructedUrl = `${environment.api.url}/${url}`;
  const authorization = `Bearer ${environment.api.token}`;

  const response = await fetch(constructedUrl, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: authorization
    }
  });

  return response;
};
