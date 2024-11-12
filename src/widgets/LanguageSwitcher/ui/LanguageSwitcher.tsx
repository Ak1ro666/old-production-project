import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { LanguageSwitcherProps } from './LanguageSwitcher.props';

export function LanguageSwitcher(props: LanguageSwitcherProps) {
    const { t, i18n } = useTranslation();

    const { className, ...otherProps } = props;

    const onChangeLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, [i18n]);

    return (
        <Button
            className={className}
            onClick={onChangeLanguage}
            theme={ThemeButton.PRIMARY}
            {...otherProps}
        >
            {t('язык')}
        </Button>
    );
}
