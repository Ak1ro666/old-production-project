import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCallback, useState, lazy } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';

export function Navbar() {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <nav className={styles.Navbar}>
                <div className={styles.links} />
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Выход')}
                </Button>
            </nav>
        );
    }

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
