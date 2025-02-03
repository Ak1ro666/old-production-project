import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile, ValidateProfileError } from '../../../domain/types';
import { validateProfileError } from '../validateProfileError/validateProfileError';

export const updateProfileData = createAsyncThunk<
  Profile,
  Profile,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (data, thunkApi) => {
  const errors = validateProfileError(data);

  if (errors.length) {
    return thunkApi.rejectWithValue(errors);
  }

  try {
    const response = await thunkApi.extra.api.put<Profile>('/profile', data);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
