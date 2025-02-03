import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSchema } from '../../domain/types';
import { fetchArticleById } from '../service/fetchArticleById';
import { Article } from '../../domain/article';

const initialState: ArticleSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleReducer } = articleSlice;
export const { actions: articleActions } = articleSlice;
