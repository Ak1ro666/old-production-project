import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleError } from './getArticleError';

describe('getArticleError', () => {
  test('should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error',
      },
    };

    expect(getArticleError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    expect(getArticleError({} as StateSchema)).toEqual(undefined);
  });
});
