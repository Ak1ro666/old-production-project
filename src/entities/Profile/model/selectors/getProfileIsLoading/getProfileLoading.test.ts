import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileLoading', () => {
  test('should return profile loading', () => {
    const state = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    expect(getProfileIsLoading({} as StateSchema)).toEqual(undefined);
  });
});
