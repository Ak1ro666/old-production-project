import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(() =>
  import('./ArticleDetailPage').then((module) => ({
    default: module.ArticleDetailPage,
  })),
);
