import { useTranslation } from 'react-i18next';

export function ArticlesPage() {
  const { t } = useTranslation('article');

  return (
    <div>
      <h1>{t('Статьи')}</h1>
    </div>
  );
}
