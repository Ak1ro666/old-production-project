import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

// export const NewTheme = {
// DARK: 'dark',
// LIGHT: 'light',
// } as const;

// export type ThemeType = (typeof NewTheme)[keyof typeof NewTheme];

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
