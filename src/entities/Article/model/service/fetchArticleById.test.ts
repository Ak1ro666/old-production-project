import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
  test('successfull fetch article', async () => {
    const article = {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Subtitle',
      img: 'img',
      views: 123,
      createdAt: '01.01.2024',
      type: ['TEXT', 'CODE'],
      blocks: [],
    };

    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockResolvedValue({ data: article });
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });
});
