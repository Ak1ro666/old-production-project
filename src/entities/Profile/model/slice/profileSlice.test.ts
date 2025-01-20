import { Country } from '@/entities/Country';
import { ProfileSchema, ValidateProfileError } from '../../domain/types';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from '@/entities/Currency';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
};

describe('profileSlice', () => {
  test('action update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: {
        age: 22,
        city: 'Moscow',
        username: 'admin',
      },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          age: 18,
        }),
      ),
    ).toEqual({
      ...state,
      formData: {
        ...state.formData,
        age: 18,
      },
    });
  });
  test('should work with empty state', () => {
    expect(profileReducer(undefined, profileActions.updateProfile({}))).toEqual({
      formData: {},
      data: undefined,
      error: undefined,
      isLoading: false,
      readonly: true,
      validateErrors: [],
    });
  });
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
  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      validateErrors: undefined,
      validateError: undefined,
      readonly: true,
      isLoading: false,
      formData: data,
      data,
    });
  });
});
