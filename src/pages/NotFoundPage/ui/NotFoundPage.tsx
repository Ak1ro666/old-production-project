import { useTranslation } from 'react-i18next';
import styles from './NotFounPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage)}>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  );
};
