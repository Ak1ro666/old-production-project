import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { FormConfig } from '@/shared/lib/form-builder';
import { useTranslation } from 'react-i18next';

export function useFormConfig({ readonly }: { readonly?: boolean }) {
  const { t } = useTranslation('profile');

  const config: FormConfig = {
    fields: [
      {
        name: 'first',
        type: 'text',
        placeholder: t('Ваше имя'),
        disabled: readonly,
      },
      {
        name: 'lastname',
        type: 'text',
        placeholder: t('Ваша фамилия'),
        disabled: readonly,
      },
      {
        name: 'age',
        type: 'text',
        placeholder: t('Ваш возраст'),
        disabled: readonly,
      },
      {
        name: 'city',
        type: 'text',
        placeholder: t('Ваш город'),
        disabled: readonly,
      },
      {
        name: 'username',
        type: 'text',
        placeholder: t('Имя пользователя'),
        disabled: readonly,
      },
      {
        name: 'avatar',
        type: 'text',
        placeholder: t('Аватар'),
        disabled: readonly,
      },
      {
        name: 'currency',
        type: 'select',
        placeholder: t('Валюта'),
        disabled: readonly,
        options: [
          { value: Currency.RUB, content: Currency.RUB },
          { value: Currency.USD, content: Currency.USD },
          { value: Currency.EUR, content: Currency.EUR },
        ],
      },
      {
        name: 'country',
        type: 'select',
        placeholder: t('Страна'),
        disabled: readonly,
        options: [
          { value: Country.Russia, content: Country.Russia },
          { value: Country.Belarus, content: Country.Belarus },
          { value: Country.Ukraine, content: Country.Ukraine },
        ],
      },
    ],
  };

  return config;
}
