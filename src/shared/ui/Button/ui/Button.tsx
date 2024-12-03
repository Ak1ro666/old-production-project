import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonProps, ButtonTheme } from './Button.props';

export function Button(props: ButtonProps) {
    const {
        children,
        theme = ButtonTheme.PRIMARY,
        onClick,
        square,
        className,
        size,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            onClick={onClick}
            type="button"
            className={classNames(
                styles.Button,
                {
                    [styles.square]: square,
                },
                [className, styles[theme], styles[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}
