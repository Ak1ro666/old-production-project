import { memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '@/shared/assets/component/theme-light.svg';
import DarkIcon from '@/shared/assets/component/theme-dark.svg';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
