import { ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function ThemeProvider({
    children,
    initialTheme,
}: {
    children: ReactNode;
    initialTheme?: Theme;
}) {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    document.body.className = theme;

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
}
