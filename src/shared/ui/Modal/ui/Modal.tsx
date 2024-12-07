import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../Portal';

const ANIMATION_DELAY = 300;

export function Modal({
    children,
    isOpen,
    onClose,
}: {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}) {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    const onContentClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [onKeyDown]);

    return (
        <Portal>
            <div
                className={classNames(styles.Modal, {
                    [styles.opened]: isOpen,
                    [styles.closed]: isClosing,
                })}
            >
                <div onClick={handleClose} className={styles.overlay}>
                    <div onClick={onContentClick} className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
