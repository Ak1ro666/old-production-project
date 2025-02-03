import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from '../constants/localstorage';

export const axiosClassic = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosAuthorized = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_USER_KEY)}`,
  },
});

// let refreshPromise: Promise<string | null> | null = null;

// const getRefreshToken = () => {
//   refreshPromise =
//     refreshPromise ??
//     authService
//       .getNewToken()
//       .then((response) => {
//         appSessionStore.setSessionToken(response.data.access_token);

//         return response.data;
//       })
//       .catch(() => {
//         appSessionStore.removeToken();
//         return null;
//       })
//       .finally(() => {
//         refreshPromise = null;
//       });

//   return refreshPromise;
// };

axiosAuthorized.interceptors.request.use(async (config) => {
  // let token = appSessionStore.getSessionToken();

  // if (!token || appSessionStore.isSessionExpired()) {
  //   token = await getRefreshToken();
  // }

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});

axiosAuthorized.interceptors.response.use(async (error) => {
  // const originalConfig = error.config;

  // if (error?.status === 401) {
  //   const token = appSessionStore.getSessionToken();

  //   if (token) {
  //     const newToken = await getRefreshToken();

  //     if (newToken) {
  //       originalConfig.headers.Authorization = `Bearer ${newToken}`;
  //       return publicApiClient.request(originalConfig);
  //     }
  //   }
  // }

  return error;
});
