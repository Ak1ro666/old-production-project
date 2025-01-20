import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, updateProfileDate } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export function useProfilePageHandlers() {
  const dispatch = useAppDispatch();

  const onChangeFirstname = (value: string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  };

  const onChangeLastname = (value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  };

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.resetFormData());
  };

  const onChangeAge = (value: string) => {
    if (value.match(/[^0-9]/g)) {
      return;
    }

    dispatch(profileActions.updateProfile({ age: Number(value) }));
  };

  const onChangeCity = (value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  };

  const onChangeUsername = (value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  };

  const onChangeAvatar = (value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  };

  const onChangeCurrency = (value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  };

  const onChangeCountry = (value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  };

  const onUpdate = () => {
    dispatch(updateProfileDate());
  };

  return {
    onChangeFirstname,
    onChangeLastname,
    onEdit,
    onCancelEdit,
    onUpdate,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } as const;
}
