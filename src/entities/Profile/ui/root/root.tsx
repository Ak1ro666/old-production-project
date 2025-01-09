import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';

import { useProfileCard } from '../../hooks/useProfileCard';
import { Layout } from '../layout/layout';
import { useTranslation } from 'react-i18next';

export function Root() {
  const { t } = useTranslation('profile');
  const profileCard = useProfileCard();

  return (
    <Layout
      title={<Text title={t('Профиль')} />}
      editAction={
        <Button theme={ButtonTheme.PRIMARY} onClick={profileCard.onEditCard}>
          {t('Редактировать')}
        </Button>
      }
      inputs={
        <>
          <Input
            disabled={profileCard.readonly}
            placeholder={t('Ваше имя')}
            value={profileCard.data?.first}
          />
          <Input
            disabled={profileCard.readonly}
            placeholder={t('Ваша фамилия')}
            value={profileCard.data?.lastname}
          />
        </>
      }
    />
  );
}
