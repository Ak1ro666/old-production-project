import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

export function Icon({
  Svg,
  className,
}: {
  Svg: React.VFC<React.SVGProps<SVGElement>>;
  className?: string;
}) {
  return <Svg className={classNames(styles.icon, {}, [className])} />;
}
