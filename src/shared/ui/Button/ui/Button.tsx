import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonProps, ButtonTheme } from './Button.types';

export function Button(props: ButtonProps) {
    const {
        children,
        theme = ButtonTheme.PRIMARY,
        onClick,
        square,
        className,
        size,
        type = 'button',
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            onClick={onClick}
            type="button"
            disabled={disabled}
            className={classNames(
                styles.Button,
                {
                    [styles.square]: square,
                    [styles.disabled]: disabled,
                },
                [className, styles[theme], styles[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}
