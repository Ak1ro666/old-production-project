import { ReactNode } from 'react';
import { ModalView } from '../ui';
import { useModalHandler } from '../view-modal/use-modal-handler';

export function Modal({
    children,
    isOpen,
    onClose,
    lazy,
}: {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}) {
    const modalHandler = useModalHandler({
        onClose,
        isOpen,
    });

    return (
        <ModalView
            isOpen={isOpen}
            isClosing={modalHandler.isClosing}
            handleClose={modalHandler.handleClose}
            onContentClick={modalHandler.onContentClick}
            lazy={lazy}
            isMounted={modalHandler.isMounted}
        >
            {children}
        </ModalView>
    );
}
