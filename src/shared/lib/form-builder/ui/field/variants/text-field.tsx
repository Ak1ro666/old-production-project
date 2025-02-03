import { Input } from '@/shared/ui/Input';
import { FieldProps, FieldValue, TextFieldConfig } from '../types';

const parseValue = (value: FieldValue) => {
  switch (typeof value) {
  case 'string': {
    return value;
  }
  case 'number': {
    return String(value);
  }
  default: {
    return '';
  }
  }
};

export function TextField({ config, value, onChange }: FieldProps<TextFieldConfig>) {
  return (
    <Input
      disabled={config.disabled}
      onChange={onChange}
      placeholder={config.placeholder}
      readOnly={config.disabled}
      value={parseValue(value)}
    />
  );
}
