import { Select } from '@/shared/ui/Select';

import { Country } from '../domain/types';
import { useTranslation } from 'react-i18next';

const options: Record<'value' | 'content', Country>[] = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export function CountrySelect({
  onChange,
  value,
  disabled,
  readOnly,
}: {
  onChange?: (value: Country) => void;
  value?: Country;
  disabled?: boolean;
  readOnly?: boolean;
}) {
  const { t } = useTranslation('profile');
  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <Select
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChangeHandler}
      value={value || Country.Russia}
      label={t('Страна')}
      options={options}
    />
  );
}
