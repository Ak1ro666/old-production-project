import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginState', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
        username: '123',
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      password: '123',
      username: '123',
      isLoading: true,
    });
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toBe(undefined);
  });
});
