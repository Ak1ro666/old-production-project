import { useSelector } from 'react-redux';
import { getLoginUsername } from '../selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions } from '../slice/loginSlice';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { loginByUsername } from '../services/loginByUsername';

export function useLoginForm(onSuccess?: () => void) {
    const dispatch = useAppDispatch();

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return {
        username,
        password,
        error,
        isLoading,
        onChangeUsername,
        onChangePassword,
        onLoginClick,
    } as const;
}
