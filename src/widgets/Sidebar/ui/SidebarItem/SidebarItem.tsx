import styles from './SidebarItem.module.scss';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

export const SidebarItem = memo(
  ({ item, collapsed }: { item?: SidebarItemType; collapsed?: boolean }) => {
    const { t } = useTranslation();

    return (
      <li
        className={classNames(styles.item, {
          [styles.collapsed]: collapsed,
        })}
      >
        <AppLink to={item.path} theme={AppLinkTheme.INVERTED_PRIMARY} className={styles.link}>
          <item.Icon className={styles.icon} />
          <span>{t(item.text)}</span>
        </AppLink>
      </li>
    );
  },
);
