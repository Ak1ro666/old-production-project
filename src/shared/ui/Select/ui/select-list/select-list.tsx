import { ChangeEvent } from 'react';

import styles from './select-list.module.scss';

export function SelectList({
  value,
  onChange,
  options,
  props,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: React.ReactNode;
  props?: React.SelectHTMLAttributes<HTMLSelectElement>;
}) {
  return (
    <select className={styles.select} value={value} onChange={onChange} {...props}>
      {options}
    </select>
  );
}
