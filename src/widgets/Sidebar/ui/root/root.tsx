import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export function Root({
    itemsList,
    collapsed,
    actions,
    actionToggle,
}: {
    itemsList: ReactNode;
    collapsed: boolean;
    actions: ReactNode;
    actionToggle: ReactNode;
}) {
    return (
        <aside
            data-testid="sidebar"
            className={classNames(styles.Sidebar, {
                [styles.collapsed]: collapsed,
            })}
        >
            <ul className={styles.items}>{itemsList}</ul>
            <div className={styles.collapsedBtn}>{actionToggle}</div>
            <div className={styles.switchers}>{actions}</div>
        </aside>
    );
}
