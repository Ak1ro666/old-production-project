import { User, userActions } from '@/entities/User';
import { axiosClassic } from '@/shared/api/instance';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

type loginByUsernameProps = {
    username: string;
    password: string;
};

enum LoginErros {
    INCORRECT_USERNAME_OR_PASSWORD = 'Вы ввели неверный логин или пароль',
    USER_NOT_FOUND = 'User not found',
    SERVER_ERROR = 'Server error',
    UNKNOWN_ERROR = 'Unknown error',
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
    try {
        const response = await axiosClassic.post('/login', authData);

        if (!response.data) {
            throw new Error("User doesn't exist");
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkApi.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль');
    }
});
