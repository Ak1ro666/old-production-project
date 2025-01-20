import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from '../getProfileError/getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    expect(getProfileError({} as StateSchema)).toEqual(undefined);
  });
});
