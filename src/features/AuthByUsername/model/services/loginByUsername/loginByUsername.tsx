import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

enum LoginErros {
  INCORRECT_USERNAME_OR_PASSWORD = 'Вы ввели неверный логин или пароль',
  USER_NOT_FOUND = 'User not found',
  SERVER_ERROR = 'Server error',
  UNKNOWN_ERROR = 'Unknown error',
}

export const loginByUsername = createAsyncThunk<
  User,
  { username: string; password: string },
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error("User doesn't exist");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    extra.navigate?.('/about');

    return response.data;
  } catch (err) {
    return rejectWithValue('Вы ввели неверный логин или пароль');
  }
});
