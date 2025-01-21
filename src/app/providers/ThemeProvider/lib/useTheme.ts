import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';
import { Theme } from './ThemeContext';
import { useThemeContext } from '../facade/useThemeContext';

export function useTheme() {
  const context = useThemeContext();

  const toggleTheme = () => {
    let theme: Theme;
    
    switch (context.theme) {
    case Theme.DARK:
      theme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      theme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      theme = Theme.DARK;
      break;
    default:
      theme = Theme.LIGHT;
      break;
    }

    context.setTheme(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  };

  return {
    theme: context.theme,
    toggleTheme,
  };
}
