import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Layout } from '../layout/layout';
import { useTranslation } from 'react-i18next';
import { Profile, ValidateProfileError } from '../../domain/types';
import { EditActions } from '../edit-action/edit-actions';
import { Inputs } from '../inputs/inputs';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useErrorProfileCard } from '../../view-model/useErrorsProfileCard';

export function Root({
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  onEdit,
  onCancelEdit,
  onUpdate,
  validateErros,
}: {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  onEdit?: () => void;
  onCancelEdit?: () => void;
  onUpdate?: () => void;
  validateErros?: ValidateProfileError[];
}) {
  const { t } = useTranslation('profile');
  const errorsProfileCard = useErrorProfileCard(validateErros);

  return (
    <Layout
      title={<Text title={t('Профиль')} />}
      avatar={data?.avatar && <Avatar size={100} src={data.avatar} alt="avatar" />}
      editActions={
        <EditActions
          title={t(readonly ? 'Редактировать' : 'Отменить')}
          onClick={readonly ? onEdit : onCancelEdit}
          additionalTitle={t('Сохранить')}
          additionalOnClick={onUpdate}
          isEdited={!readonly}
        />
      }
      inputs={
        <Inputs
          data={data}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
          placeholderFirstname={t('Ваше имя')}
          placeholderLastname={t('Ваша фамилия')}
          placeholderAge={t('Ваш возраст')}
          placeholderCity={t('Ваш город')}
          placeholderUsername={t('Имя пользователя')}
          placeholderAvatar={t('Аватар')}
        />
      }
      validateErrors={errorsProfileCard}
      error={
        error && (
          <Text
            align={TextAlign.CENTER}
            theme={TextTheme.ERROR}
            title={t('Ошибка при получении профиля')}
            text={t('Попробуйте перезагрузить страницу')}
          />
        )
      }
      isLoading={isLoading}
    />
  );
}
