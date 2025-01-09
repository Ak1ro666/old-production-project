import React from 'react';
import styles from './layout.module.scss';

export function Layout({
  inputs,
  editAction,
  title,
}: {
  inputs: React.ReactNode;
  editAction: React.ReactNode;
  title: React.ReactNode;
}) {
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
