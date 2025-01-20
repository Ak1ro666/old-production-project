import React from 'react';
import { Loader } from '@/shared/ui/Loader';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './layout.module.scss';

export function Layout({
  inputs,
  editActions,
  title,
  avatar,
  error,
  isLoading,
  validateErrors,
}: {
  inputs: React.ReactNode;
  editActions: React.ReactNode;
  title: React.ReactNode;
  avatar?: React.ReactNode;
  error?: React.ReactNode;
  isLoading?: boolean;
  validateErrors?: React.ReactNode;
}) {
  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className={classNames(styles.ProfileCard, {}, [styles.error])}>{error}</div>;
  }

  return (
    <div className={styles.ProfileCard}>
      <div className={styles.header}>
        {title}
        {editActions}
      </div>
      <div className={styles.avatarWrapper}>{avatar}</div>
      <div className={styles.data}>{inputs}</div>
      <div className={styles.errors}>{validateErrors}</div>
    </div>
  );
}
