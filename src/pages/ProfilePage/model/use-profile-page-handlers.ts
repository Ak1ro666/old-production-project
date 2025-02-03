import { Profile, profileActions, updateProfileData } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export function useProfilePageHandlers() {
  const dispatch = useAppDispatch();

  const onSubmitForm = (data: Profile) => {
    dispatch(updateProfileData(data));
  };

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.resetFormData());
  };

  return {
    onEdit,
    onCancelEdit,
    onSubmitForm,
  } as const;
}
