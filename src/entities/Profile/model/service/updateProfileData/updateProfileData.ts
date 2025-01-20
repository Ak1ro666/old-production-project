import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile, ValidateProfileError } from '../../../domain/types';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileError } from '../validateProfileError/validateProfileError';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const formData = getProfileFormData(thunkApi.getState());
  const errors = validateProfileError(formData);

  if (errors.length) {
    return thunkApi.rejectWithValue(errors);
  }

  try {
    const response = await thunkApi.extra.api.put<Profile>('/profile', formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
