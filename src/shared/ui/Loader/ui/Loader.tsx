import { memo } from 'react';
import styles from './Loader.module.scss';

export const Loader = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles['lds-spinner']}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
});
