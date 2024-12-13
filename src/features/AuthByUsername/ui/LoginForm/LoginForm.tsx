import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import { Input } from '@/shared/ui/Input';

export function LoginForm() {
    const [userName, setUserName] = useState('');
    const { t } = useTranslation();

    return (
        <form className={styles.loginForm}>
            <Input autoFocus placeholder={t('Введите username')} className={styles.input} />
            <Input placeholder={t('Введите пароль')} className={styles.input} />
            <Button type="button" className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </form> 
    );
}
