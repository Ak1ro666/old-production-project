import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';
import { memo } from 'react';

export const PageLoader = memo(() => {
  return (
    <div className={classNames(styles.PageLoader)}>
      <Loader />
    </div>
  );
});
