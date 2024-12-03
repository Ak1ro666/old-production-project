import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';

import MainIcon from '@/shared/assets/main-icon.svg';
import AboutIcon from '@/shared/assets/about-icon.svg';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { ROUTE_PATHS } from '@/shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
    const { t } = useTranslation();
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
            <ul className={styles.items}>
                <li className={styles.item}>
                    <AppLink
                        to={ROUTE_PATHS.main}
                        theme={AppLinkTheme.INVERTED_PRIMARY}
                        className={styles.link}
                    >
                        <MainIcon className={styles.icon} />
                        <span>{t('главная')}</span>
                    </AppLink>
                </li>
                <li className={styles.item}>
                    <AppLink
                        to={ROUTE_PATHS.about}
                        className={styles.link}
                        theme={AppLinkTheme.INVERTED_PRIMARY}
                    >
                        <AboutIcon className={styles.icon} />
                        <span>{t('о нас')}</span>
                    </AppLink>
                </li>
            </ul>
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggleSidebar}
                className={styles.collapsedBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={styles.languageSwitcher} />
            </div>
        </aside>
    );
};
