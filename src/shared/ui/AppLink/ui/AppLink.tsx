import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';
import { AppLinkProps, AppLinkTheme } from './AppLink.props';

export function AppLink(props: AppLinkProps) {
    const {
        to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
}
