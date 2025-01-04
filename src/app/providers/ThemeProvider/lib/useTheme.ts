import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
