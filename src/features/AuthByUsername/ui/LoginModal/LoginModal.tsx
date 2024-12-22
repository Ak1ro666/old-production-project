import { Modal } from '@/shared/ui/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader';

export function LoginModal({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
}
