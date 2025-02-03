import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleIsLoading } from './getArticleIsLoading';

describe('getArticleIsLoading', () => {
  test('should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };

    expect(getArticleIsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(getArticleIsLoading({} as StateSchema)).toEqual(undefined);
  });
});
