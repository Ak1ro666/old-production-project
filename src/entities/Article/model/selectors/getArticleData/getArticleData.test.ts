import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleData } from './getArticleData';

describe('getArticleData', () => {
  test('should return article data', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        data: {
          id: '1',
          title: 'Hello',
        },
      },
    };

    expect(getArticleData(state as StateSchema)).toEqual({ id: '1', title: 'Hello' });
  });

  test('should work with empty state', () => {
    expect(getArticleData({} as StateSchema)).toEqual(undefined);
  });
});
