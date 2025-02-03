import { useEffect } from 'react';

import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from '@/entities/Profile';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

export function useProfilePage() {
  const dispatch = useAppDispatch();

  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const data = useAppSelector(getProfileData);
  const readonly = useAppSelector(getProfileReadonly);
  const validateProfileErros = useAppSelector(getProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return {
    data,
    error,
    isLoading,
    readonly,
    validateProfileErros,
  } as const;
}
