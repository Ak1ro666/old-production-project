import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';

export const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { username, password, isLoading, error } = useSelector(getLoginState);

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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <form className={styles.loginForm}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
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
            <Button
                onClick={onLoginClick}
                theme={ButtonTheme.PRIMARY}
                type="button"
                className={styles.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </form>
    );
});
