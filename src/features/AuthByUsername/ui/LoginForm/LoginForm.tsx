import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getPassword, getUsername } from '../../model/selectors';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';

export function LoginForm() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getUsername);
    const password = useSelector(getPassword);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    return (
        <form className={styles.loginForm}>
            <Input
                autoFocus
                placeholder={t('Введите username')}
                className={styles.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                className={styles.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button type="button" className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </form>
    );
}
