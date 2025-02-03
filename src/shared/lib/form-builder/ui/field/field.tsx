import { FieldProps } from './types';
import { SelectField } from './variants/select-field';
import { TextField } from './variants/text-field';

export function Field({ config, value, onChange }: FieldProps) {
  switch (config.type) {
  case 'text':
    return <TextField  config={config} value={value} onChange={onChange} />;
  case 'select':
    return <SelectField config={config} value={value} onChange={onChange} />;
  default:
    return null;
  }
}
