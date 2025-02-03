import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

export const Skeleton = memo(
  ({
    border,
    height,
    width,
    className,
  }: {
    className?: string;
    height?: number | string;
    width?: number | string;
    border?: string;
  }) => {
    const style: CSSProperties = useMemo(
      () => ({
        width,
        height,
        borderRadius: border,
      }),
      [border, height, width],
    );

    return <div className={classNames(styles.skeleton, {}, [className])} style={style} />;
  },
);
