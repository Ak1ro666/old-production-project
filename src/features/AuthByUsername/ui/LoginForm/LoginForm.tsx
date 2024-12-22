import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

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
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});
