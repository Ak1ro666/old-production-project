export type FieldBase = {
  name: string;
  disabled?: boolean;
  placeholder?: string;
};

export type TextFieldConfig = FieldBase & {
  type: 'text';
};

export type SelectFieldConfig = FieldBase & {
  type: 'select';
  options: { value: string; content: string }[];
};

export type FieldConfig = TextFieldConfig | SelectFieldConfig;

export type FieldValue = unknown;
export type OnChangeFieldValue = (value: unknown) => void;

export type FieldProps<T extends FieldConfig = FieldConfig> = {
  config: T;
  value: FieldValue;
  onChange: OnChangeFieldValue;
};
