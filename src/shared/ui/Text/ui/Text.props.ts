export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export interface TextProps {
  theme?: TextTheme;
  text?: string;
  title?: string;
  align?: TextAlign;
}
