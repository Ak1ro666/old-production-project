import { useAppSelector } from '@/app/providers/StoreProvider/model/store';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { profileActions } from '../model/slice/profileSlice';

export function useProfileCard() {
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const data = useAppSelector(getProfileData);
  const readonly = useAppSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEditCard = () => {
    if (readonly) {
      dispatch(profileActions.setReadonly(false));
    } else {
      dispatch(profileActions.setReadonly(true));
    }
  };

  return {
    error,
    isLoading,
    data,
    readonly,
    onEditCard,
  } as const;
}
