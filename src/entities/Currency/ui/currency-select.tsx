import { Select } from '@/shared/ui/Select';

import { Currency } from '../domain/types';
import { useTranslation } from 'react-i18next';

const options: Record<'value' | 'content', Currency>[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export function CurrencySelect({
  onChange,
  value,
  disabled,
  readOnly,
}: {
  onChange?: (value: Currency) => void;
  value?: Currency;
  disabled?: boolean;
  readOnly?: boolean;
}) {
  const { t } = useTranslation('profile');
  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <Select
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChangeHandler}
      value={value || Currency.RUB}
      label={t('Валюта')}
      options={options}
    />
  );
}
