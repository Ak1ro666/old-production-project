import { useTranslation } from 'react-i18next';
import { ROUTE_PATHS } from '@/shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import styles from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className={styles.Navbar}>
            <div className={styles.links}>
                <AppLink
                    to={ROUTE_PATHS.main}
                    theme={AppLinkTheme.PRIMARY}
                    className={styles.mainLink}
                >
                    {t('главная')}
                </AppLink>
                <AppLink to={ROUTE_PATHS.about} theme={AppLinkTheme.PRIMARY}>
                    {t('о нас')}
                </AppLink>
            </div>
        </nav>
    );
}
