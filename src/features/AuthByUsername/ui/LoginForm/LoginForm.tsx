import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { memo } from 'react';
import { loginReducer } from '../../model/slice/loginSlice';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useLoginForm } from '../../model/hooks/use-login-form';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo(({ onSuccess }: { onSuccess?: () => void }) => {
    const { t } = useTranslation();
    const loginForm = useLoginForm(onSuccess);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <form className={styles.loginForm}>
                <Text title={t('Форма авторизации')} />
                {loginForm.error && <Text text={t(loginForm.error)} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    placeholder={t('Введите username')}
                    className={styles.input}
                    onChange={loginForm.onChangeUsername}
                    value={loginForm.username}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    className={styles.input}
                    onChange={loginForm.onChangePassword}
                    value={loginForm.password}
                />
                <Button
                    onClick={loginForm.onLoginClick}
                    theme={ButtonTheme.PRIMARY}
                    type="button"
                    className={styles.loginBtn}
                    disabled={loginForm.isLoading}
                >
                    {t('Войти')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});
