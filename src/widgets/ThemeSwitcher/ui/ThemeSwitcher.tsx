import { Theme, useTheme } from '@/app/providers/ThemeProvider';

import LightIcon from '@/shared/assets/theme-light.svg';
import DarkIcon from '@/shared/assets/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
