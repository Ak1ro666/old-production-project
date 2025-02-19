import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../../domain/types';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error("Profile doesn't exist");
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('Профиль не был найден');
    }
  },
);
