import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { getArticleIsLoading } from '../selectors/getArticleIsLoading/getArticleIsLoading';
import { getArticleError } from '../selectors/getArticleError/getArticleError';
import { getArticleData } from '../selectors/getArticleData/getArticleData';
import { useEffect } from 'react';
import { fetchArticleById } from '../service/fetchArticleById';

export function useArticle(id: string) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleIsLoading);
  const error = useAppSelector(getArticleError);
  const data = useAppSelector(getArticleData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return {
    isLoading,
    error,
    data,
  } as const;
}
