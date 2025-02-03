import { useArtcileId } from '../model/use-artcile-id';

import { Article } from '@/entities/Article';

export function ArticleDetailPage() {
  const id = useArtcileId();

  return (
    <div>
      <Article id={id} />
    </div>
  );
}
