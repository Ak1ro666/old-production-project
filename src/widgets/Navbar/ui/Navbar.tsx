import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useNavbar } from '../model/use-navbar';

export const Navbar = memo(() => {
  const { t } = useTranslation();
  const navbar = useNavbar();

  if (navbar.authData) {
    return (
      <nav className={styles.Navbar}>
        <div className={styles.links} />
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={navbar.onLogout}>
          {t('Выход')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={styles.Navbar}>
      <div className={styles.links} />
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={navbar.handleOpenModal}>
        {t('Авторизация')}
      </Button>
      {navbar.isAuthModal && (
        <LoginModal isOpen={navbar.isAuthModal} onClose={navbar.handleCloseModal} />
      )}
    </nav>
  );
});
