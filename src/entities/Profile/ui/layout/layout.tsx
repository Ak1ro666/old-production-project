import React from 'react';
import { Loader } from '@/shared/ui/Loader';

import styles from './layout.module.scss';

export function Layout({
  inputs,
  editAction,
  title,
  error,
  isLoading,
}: {
  inputs: React.ReactNode;
  editAction: React.ReactNode;
  title: React.ReactNode;
  error?: React.ReactNode;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className={styles.ProfileCard}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className={styles.ProfileCard}>{error}</div>;
  }

  return (
    <div className={styles.ProfileCard}>
      <div className={styles.header}>
        {title}
        {editAction}
      </div>
      <div className={styles.data}>{inputs}</div>
    </div>
  );
}
