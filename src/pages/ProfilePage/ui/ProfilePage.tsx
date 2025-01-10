import { useEffect } from 'react';

import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  ProfileCard,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/app/providers/StoreProvider/model/store';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const data = useAppSelector(getProfileData);
  const readonly = useAppSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return <ProfileCard data={data} error={error} isLoading={isLoading} readonly={readonly} />;
}
