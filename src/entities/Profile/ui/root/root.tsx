import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Layout } from '../layout/layout';
import { useTranslation } from 'react-i18next';
import { Profile, ValidateProfileError } from '../../domain/types';
import { EditActions } from '../edit-action/edit-actions';
import { Avatar } from '@/shared/ui/Avatar';
import { useErrorProfileCard } from '../../view-model/useErrorsProfileCard';
import { FormBuilder } from '@/shared/lib/form-builder';
import { FormValue } from '@/shared/lib/form-builder/ui/form/types';
import { useFormConfig } from '../../view-model/use-form-config';

export function Root({
  data,
  error,
  isLoading,
  readonly,
  onEdit,
  onCancelEdit,
  validateErros,
  onSubmitForm,
}: {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onEdit?: () => void;
  onCancelEdit?: () => void;
  validateErros?: ValidateProfileError[];
  onSubmitForm?: (data: Profile) => void;
}) {
  const { t } = useTranslation('profile');
  const errorsProfileCard = useErrorProfileCard(validateErros);
  const config = useFormConfig({ readonly });

  return (
    <Layout
      title={<Text title={t('Профиль')} />}
      avatar={data?.avatar && <Avatar size={100} src={data.avatar} alt="avatar" />}
      editActions={
        <EditActions
          title={t(readonly ? 'Редактировать' : 'Отменить')}
          onClick={readonly ? onEdit : onCancelEdit}
        />
      }
      form={
        <FormBuilder
          onChange={onSubmitForm}
          defaultValues={data as FormValue}
          disabled={readonly}
          config={config}
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
