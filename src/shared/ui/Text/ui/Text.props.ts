export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export interface TextProps {
    theme?: TextTheme;
    text?: string;
    title?: string;
}
