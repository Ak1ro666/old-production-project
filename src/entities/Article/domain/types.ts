import { Article } from './article';

export type ArticleSchema = {
  isLoading?: boolean;
  error?: string;
  data?: Article;
};
