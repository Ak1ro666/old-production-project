import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
}
