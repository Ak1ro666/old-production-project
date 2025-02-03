import { Country } from '@/entities/Country';
import { ProfileSchema, ValidateProfileError } from '../../domain/types';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from '@/entities/Currency';

describe('profileSlice', () => {
  test('action set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
});
