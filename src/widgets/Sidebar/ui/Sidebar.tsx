import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggleSidebar = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, [collapsed]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                {
                    [styles.collapsed]: collapsed,
                },
                [],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ThemeButton.PRIMARY}
                onClick={onToggleSidebar}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.languageSwitcher} />
            </div>
        </aside>
    );
};
