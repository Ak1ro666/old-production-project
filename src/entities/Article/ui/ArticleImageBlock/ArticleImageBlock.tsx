import { ArticleImageBlock } from '../../domain/article';
import { Text, TextAlign } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ArticleImageBlock.module.scss';

export function ArticleImageBlock({
  block,
  className,
}: {
  block: ArticleImageBlock;
  className?: string;
}) {
  return (
    <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
      <img className={styles.img} src={block.src} alt={block.title} />
      {block.title && <Text className={styles.blockTitle} text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
}
