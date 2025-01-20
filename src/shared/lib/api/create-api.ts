type CreateApi = {
  baseUrl: string;
  authToken?: string;
};

type RequestConfig = RequestInit & {
  url: string;
  json?: unknown;
};

export class ApiError extends Error {
  constructor(
    public requestConfig: RequestConfig,
    public response: Response,
  ) {
    super(response.statusText);
  }
}

export function createApi({ baseUrl, authToken }: CreateApi) {
  return async function apiInstance<T>(config: RequestConfig) {
    const response = await fetch(`${baseUrl}${config.url}`, config);

    if (config.json) {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        authorization: `Bearer ${authToken}`,
      };

      config.body = JSON.stringify(config.json);
    }

    if (!response.ok) {
      throw new ApiError(config, response);
    }

    return response.json() as Promise<T>;
  };
}
