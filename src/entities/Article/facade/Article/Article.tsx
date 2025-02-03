import EyeIcon from '@/shared/assets/component/eye.svg';
import CalendarIcon from '@/shared/assets/component/calendar.svg';

import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { useArticle } from '../../model/hooks/useArticle';

import { ArticleDetailsBlock } from '../ArticleDetailsBlock/ArticleDetailsBlock';

import styles from './Article.module.scss';

export function Article({ id }: { id: string }) {
  const article = useArticle(id);

  if (article.isLoading) {
    return (
      <div className={styles.loading}>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.skeleton} width={300} height={32} />
        <Skeleton className={styles.skeleton} width="100%" height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </div>
    );
  }

  if (article.error) {
    return <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={article.error} />;
  }

  return (
    <div>
      <Avatar
        className={styles.avatar}
        size={200}
        src={article.data?.img}
        alt={article.data?.title}
      />
      <Text className={styles.title} title={article.data?.subtitle} />
      <div className={styles.info}>
        <Icon Svg={EyeIcon} />
        <Text text={String(article.data?.views)} />
      </div>
      <div className={styles.info}>
        <Icon Svg={CalendarIcon} />
        <Text text={article.data?.createdAt} />
      </div>
      {article.data?.blocks.map((block) => (
        <ArticleDetailsBlock key={block.id} block={block} className={styles.block} />
      ))}
    </div>
  );
}
