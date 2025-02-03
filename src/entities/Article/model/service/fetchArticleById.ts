import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleId } from '../../domain/article';

export const fetchArticleById = createAsyncThunk<Article, ArticleId, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`/articles/${id}`);

      if (!response.data) {
        throw new Error("Article doesn't exist");
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('Ошибка при загрузке статьи');
    }
  },
);
