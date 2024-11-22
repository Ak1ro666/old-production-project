import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

export const PageLoader = () => {
    return (
        <div className={classNames(styles.PageLoader)}>
            <Loader />
        </div>
    );
};
