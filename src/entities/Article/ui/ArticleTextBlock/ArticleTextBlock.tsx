import { Text } from '@/shared/ui/Text';

import { ArticleTextBlock } from '../../domain/article';

import styles from './ArticleTextBlock.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export function ArticleTextBlock({
  block,
  className,
}: {
  block: ArticleTextBlock;
  className?: string;
}) {
  return (
    <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
      {block.title && <Text className={styles.blockTitle} title={block.title} />}
      {block.paragraphs &&
        block.paragraphs.map((paragraph) => (
          <Text className={styles.blockParagraph} key={paragraph} text={paragraph} />
        ))}
    </div>
  );
}
