import { useTranslation } from 'react-i18next';
import { ValidateProfileError } from '../domain/types';
import { Text, TextTheme } from '@/shared/ui/Text';

export function useErrorProfileCard(errors?: ValidateProfileError[]) {
  const { t } = useTranslation();

  const validateErrosTranslate: Record<ValidateProfileError, string> = {
    [ValidateProfileError.SERVER_ERROR]: 'Произошла ошибка',
    [ValidateProfileError.INCORRECT_USER_DATA]: 'Имя и фамилия обязательны',
    [ValidateProfileError.INCORRECT_AGE]: 'Введите ваш возраст',
    [ValidateProfileError.INCORRECT_COUNTRY]: 'Введите вашу страну',
    [ValidateProfileError.NO_DATE]: 'Введите вашу дату рождения',
  };

  const validateErrors =
    !!errors?.length &&
    errors.map((error) => (
      <Text key={error} theme={TextTheme.ERROR} text={t(validateErrosTranslate[error])} />
    ));

  return validateErrors;
}
