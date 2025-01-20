import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../../domain/types';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErros', () => {
  test('should return profile validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('should work with empty state', () => {
    expect(getProfileValidateErrors({} as StateSchema)).toEqual(undefined);
  });
});
