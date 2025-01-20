import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 22,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Ivan',
  lastname: 'Ivanov',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('fetchProfileData', () => {
  test('successfull fetch profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue({ data });
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.payload).toEqual(data);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('failed fetch profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Профиль не был найден');
  });
});
