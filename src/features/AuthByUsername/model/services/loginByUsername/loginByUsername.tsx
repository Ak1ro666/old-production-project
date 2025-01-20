import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constants/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginByUsername = createAsyncThunk<User, { username: string; password: string }, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
      throw new Error("User doesn't exist");
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    extra.navigate?.('/about');

    return response.data;
  } catch (err) {
    return rejectWithValue('Вы ввели неверный логин или пароль');
  }
});
