import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export function PageError() {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={styles.page}>
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
}
