import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
