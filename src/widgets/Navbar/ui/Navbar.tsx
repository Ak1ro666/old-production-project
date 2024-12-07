import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';

export function Navbar() {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={styles.Navbar}>
            <div className={styles.links} />
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
                {t('Авторизация')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={handleOpenModal}>
                {t('Авторизоваться')}
            </Modal>
        </nav>
    );
}
