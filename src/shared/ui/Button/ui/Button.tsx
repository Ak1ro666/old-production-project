import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonProps, ButtonSize, ButtonTheme } from './Button.types';
import { memo } from 'react';

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    theme = ButtonTheme.PRIMARY,
    onClick,
    square,
    className,
    size = ButtonSize.M,
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
});
