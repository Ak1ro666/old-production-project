import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { memo } from 'react';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useLoginForm } from '../../model/hooks/use-login-form';

import styles from './Login.module.scss';

export const LoginForm = memo(({ onSuccess }: { onSuccess?: () => void }) => {
  const { t } = useTranslation();
  const loginForm = useLoginForm(onSuccess);

  return (
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
        type="password"
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
  );
});
