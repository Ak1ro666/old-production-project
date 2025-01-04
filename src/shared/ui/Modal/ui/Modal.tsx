import { MouseEvent, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../Portal';

export function Modal({
  children,
  isOpen,
  isClosing,
  handleClose,
  lazy,
  isMounted,
}: {
  children: ReactNode;
  isOpen?: boolean;
  isClosing: boolean;
  handleClose: () => void;
  lazy?: boolean;
  isMounted?: boolean;
}) {
  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(styles.Modal, {
          [styles.opened]: isOpen,
          [styles.closed]: isClosing,
        })}
      >
        <div onClick={handleClose} className={styles.overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.content}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
