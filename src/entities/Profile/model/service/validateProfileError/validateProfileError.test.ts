import { Country } from '@/entities/Country';
import { Profile, ValidateProfileError } from '../../../domain/types';
import { validateProfileError } from './validateProfileError';
import { Currency } from '@/entities/Currency';

const profile: Profile = {
  username: 'admin',
  age: 22,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Ivan',
  lastname: 'Ivanov',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('validateProfileError', () => {
  test('should return errors', () => {
    expect(validateProfileError(profile)).toEqual([]);
  });
  test('should work with empty profile', () => {
    expect(validateProfileError({} as Profile)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('should return server error', () => {
    expect(validateProfileError(undefined)).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
