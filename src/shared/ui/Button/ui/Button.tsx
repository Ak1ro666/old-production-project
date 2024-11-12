import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonProps, ThemeButton } from './Button.props';

export function Button(props: ButtonProps) {
    const {
        children,
        theme = ThemeButton.PRIMARY,
        onClick,
        className,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            onClick={onClick}
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}
