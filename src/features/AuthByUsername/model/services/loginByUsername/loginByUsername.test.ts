import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  test('successfull login', async () => {
    const userValue = { id: '1', username: 'admin' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue({ data: userValue });
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('failed login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockRejectedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный логин или пароль');
  });
});
