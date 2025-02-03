import { TextProps, TextTheme, TextAlign, TextSize } from './Text.props';

import styles from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

export const Text = memo((props: TextProps) => {
  const {
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    title,
    text,
    className,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.Text, {}, [
        styles[theme],
        styles[size],
        styles[align],
        className,
      ])}
    >
      {title && (
        <p className={styles.title} {...otherProps}>
          {title}
        </p>
      )}
      {text && (
        <p className={styles.text} {...otherProps}>
          {text}
        </p>
      )}
    </div>
  );
});
