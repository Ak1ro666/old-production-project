export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

export interface TextProps {
  theme?: TextTheme;
  text?: string;
  title?: string;
  align?: TextAlign;
  size?: TextSize;
  className?: string;
}
