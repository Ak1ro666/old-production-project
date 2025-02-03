import { Select } from '@/shared/ui/Select';
import { FieldProps, FieldValue, SelectFieldConfig } from '../types';

const parseValue = (value: FieldValue) => {
  if (typeof value === 'string') {
    return value;
  }

  return '';
};

export function SelectField({ config, value, onChange }: FieldProps<SelectFieldConfig>) {
  return (
    <Select
      readOnly={config.disabled}
      disabled={config.disabled}
      onChange={onChange}
      value={parseValue(value)}
      label={config.placeholder}
      options={config.options}
    />
  );
}
