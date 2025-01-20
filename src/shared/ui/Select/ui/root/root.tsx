import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './select.module.scss';

export function Root({
  label,
  className,
  select,
  disabled,
}: {
  label?: string;
  className?: string;
  select: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={classNames(
        styles.wrapperSelect,
        {
          [styles.disabled]: disabled,
        },
        [className],
      )}
    >
      {label && <span className={styles.label}>{`${label}>`}</span>}
      {select}
    </div>
  );
}
