import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../domain/article';

import styles from './ArticleCodeBlock.module.scss';
import { Code } from '@/shared/ui/Code';

export function ArticleCodeBlock({
  block,
  className,
}: {
  block: ArticleCodeBlock;
  className?: string;
}) {
  return (
    <Code
      className={classNames(styles.ArticleCodeBlock, {}, [className])}
      text={block.code || ''}
    />
  );
}
