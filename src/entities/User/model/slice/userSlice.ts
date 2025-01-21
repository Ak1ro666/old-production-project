import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/UserSchema';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constants/localstorage';

const initialState: UserSchema = {
  authData: undefined,
  _inited: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }

      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
