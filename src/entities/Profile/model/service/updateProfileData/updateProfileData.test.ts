import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Profile, ValidateProfileError } from '../../../domain/types';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const data: Profile = {
  age: 22,
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Ivan',
  lastname: 'Ivanov',
  username: 'admin',
};

describe('updateProfileData', () => {
  test('should work update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockResolvedValue({ data });
    const result = await thunk.callThunk(data);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('failed update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockRejectedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
