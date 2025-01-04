import { createContext } from 'react';

export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme',
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
