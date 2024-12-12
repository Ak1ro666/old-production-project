import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

const ANIMATION_DELAY = 300;

export function useModalHandler({ onClose, isOpen }: { onClose?: () => void; isOpen?: boolean }) {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose?.();
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
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [onKeyDown]);

    return {
        isClosing,
        handleClose,
        onContentClick,
        isMounted,
    };
}