import { axiosClassic } from '@/shared/api/instance';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('@/shared/api/instance');

const mockedAxiosClassic = jest.mocked(axiosClassic, true);

describe('loginByUsername', () => {
  test('successfull login', async () => {
    const userValue = { id: '1', username: 'admin' };
    mockedAxiosClassic.post.mockResolvedValue({ data: userValue });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxiosClassic.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('failed login', async () => {
    mockedAxiosClassic.post.mockRejectedValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxiosClassic.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный логин или пароль');
  });
});
