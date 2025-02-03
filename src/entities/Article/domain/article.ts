export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}

type ArticleDetailsBase = {
  id: string;
  type?: ArticleBlockType;
  title?: string;
};

export type ArticleTextBlock = ArticleDetailsBase & {
  type: ArticleBlockType.TEXT;
  paragraphs?: string[];
};

export type ArticleImageBlock = ArticleDetailsBase & {
  type: ArticleBlockType.IMAGE;
  src?: string;
};

export type ArticleCodeBlock = ArticleDetailsBase & {
  type: ArticleBlockType.CODE;
  code?: string;
};

export type Block = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleTypeBlock {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export type ArticleId = string;

export type Article = {
  id: ArticleId;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypeBlock[];
  blocks: Block[];
};
