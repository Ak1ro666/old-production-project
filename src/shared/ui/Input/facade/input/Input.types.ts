import { InputHTMLAttributes } from 'react';

export enum InputTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'inverted_primary',
  INVERTED_SECONDARY = 'inverted_secondary',
  CLEAR = 'clear',
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'> {
  value?: string | number;
  onChange?: (value: string) => void;
  theme?: InputTheme;
  readOnly?: boolean;
}
