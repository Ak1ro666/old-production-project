import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema, ValidateProfileError } from '../../domain/types';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  formData: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validateErrors: [],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    resetFormData: (state) => {
      state.formData = state.data;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.formData = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.formData = action.payload;
        state.readonly = true;
      })
      .addCase(
        updateProfileData.rejected,
        (state, action: PayloadAction<ValidateProfileError[] | undefined>) => {
          state.isLoading = false;
          state.validateErrors = action.payload;
        },
      );
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
