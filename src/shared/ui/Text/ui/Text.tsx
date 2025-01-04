import { TextProps, TextTheme } from './Text.props';

import styles from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

export const Text = memo((props: TextProps) => {
    const { theme = TextTheme.PRIMARY, title, text, ...otherProps } = props;

    return (
        <div className={classNames(styles.Text, {}, [styles[theme]])}>
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
