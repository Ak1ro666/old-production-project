import { ArticleBlockType, Block } from '../../domain/article';
import { ArticleCodeBlock } from '../../ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../../ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../../ui/ArticleTextBlock/ArticleTextBlock';

export function ArticleDetailsBlock({ block, className }: { block: Block; className?: string }) {
  switch (block.type) {
  case ArticleBlockType.TEXT:
    return <ArticleTextBlock block={block} className={className} />;
  case ArticleBlockType.IMAGE:
    return <ArticleImageBlock block={block} className={className} />;
  case ArticleBlockType.CODE:
    return <ArticleCodeBlock block={block} className={className} />;
  default:
    return null;
  }
}
