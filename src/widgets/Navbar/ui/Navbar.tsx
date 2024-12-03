import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className={styles.Navbar}>
            <div className={styles.links} />
        </nav>
    );
}
