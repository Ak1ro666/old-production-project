import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state = {
      profile: {
        data: {
          username: '123',
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({ username: '123' });
  });

  test('should work with empty state', () => {
    expect(getProfileData({} as StateSchema)).toEqual(undefined);
  });
});
