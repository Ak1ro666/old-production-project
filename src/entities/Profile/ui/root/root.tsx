import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';

import { Layout } from '../layout/layout';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/domain/types';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';

export function Root({
  data,
  error,
  isLoading,
  readonly,
}: {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
}) {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onEditCard = () => {
    if (readonly) {
      dispatch(profileActions.setReadonly(false));
    } else {
      dispatch(profileActions.setReadonly(true));
    }
  };

  return (
    <Layout
      title={<Text title={t('Профиль')} />}
      editAction={
        <Button theme={ButtonTheme.PRIMARY} onClick={onEditCard}>
          {t('Редактировать')}
        </Button>
      }
      inputs={
        <>
          <Input disabled={readonly} placeholder={t('Ваше имя')} value={data?.first} />
          <Input disabled={readonly} placeholder={t('Ваша фамилия')} value={data?.lastname} />
        </>
      }
      error={
        error && (
          <Text
            title={t('Ошибка при получении профиля')}
            text={t('Попробуйте перезагрузить страницу')}
          />
        )
      }
      isLoading={isLoading}
    />
  );
}
