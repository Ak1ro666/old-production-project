import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';
import { Theme } from './ThemeContext';
import { useThemeContext } from './useThemeContext';

export function useTheme() {
  const context = useThemeContext();

  const toggleTheme = () => {
    const newTheme = context.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    context.setTheme(newTheme);
  };

  return {
    theme: context.theme,
    toggleTheme,
  };
}
