import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export const LanguageSwitcher = memo(
  ({ className, short }: { className?: string; short?: boolean }) => {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = useCallback(() => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, [i18n]);

    return (
      <Button className={className} onClick={onChangeLanguage} theme={ButtonTheme.PRIMARY}>
        {t(short ? 'Короткий язык' : 'язык')}
      </Button>
    );
  },
);
