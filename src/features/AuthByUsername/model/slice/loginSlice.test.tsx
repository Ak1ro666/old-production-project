import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234'))).toEqual({
      username: '1234',
    });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234'))).toEqual({
      password: '1234',
    });
  });
});
