import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './styles.module.scss';

export function Root({
  input,
  caretPosition,
  isCaretVisible,
  placeholder,
  className,
  disabled,
}: {
  input: React.ReactNode;
  isCaretVisible?: boolean;
  caretPosition?: number;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        styles.inputWrapper,
        {
          [styles.disabled]: disabled,
        },
        [className],
      )}
    >
      <div className={styles.placeholder}>{placeholder}</div>
      <div className={styles.caretWrapper}>
        {input}
        {isCaretVisible && (
          <span
            className={styles.caret}
            style={{
              left: caretPosition! * 8.8,
            }}
          />
        )}
      </div>
    </div>
  );
}
