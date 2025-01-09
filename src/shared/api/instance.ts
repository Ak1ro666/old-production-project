import axios from 'axios';

import { LOCAL_STORAGE_THEME_KEY } from '../constants/localstorage';

export const axiosClassic = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_THEME_KEY)}`,
  },
});
