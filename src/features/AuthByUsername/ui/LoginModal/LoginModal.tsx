import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

export function LoginModal({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
}
