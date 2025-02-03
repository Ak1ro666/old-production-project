import { CSSProperties, useMemo } from 'react';

import styles from './Avatar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type AvatarProps = {
  className?: string;
  src?: string;
  alt?: string;
  size?: number | string;
  lazy?: boolean;
};

export function Avatar(props: AvatarProps) {
  const { className, src, alt, lazy, size = 100 } = props;

  const cssStyles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      style={cssStyles}
      className={classNames(styles.Avatar, {}, [className])}
      src={src}
      loading={lazy ? 'lazy' : 'eager'}
      alt={alt}
    />
  );
}
