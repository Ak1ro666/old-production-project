import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCallback, useState, lazy } from 'react';
import { LoginModal } from '@/features/AuthByUsername';

export function Navbar() {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal((prev) => false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal((prev) => true);
    }, []);

    return (
        <nav className={styles.Navbar}>
            <div className={styles.links} />
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
                {t('Авторизация')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
        </nav>
    );
}
