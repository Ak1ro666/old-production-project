import { memo } from 'react';
import { Layout } from '../../ui/root';
import { useSidebar } from '../../view-model/use-sidebar';

import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

export const Sidebar = memo(() => {
  const { itemsList, collapsed, onToggleSidebar } = useSidebar();

  return (
    <Layout
      collapsed={collapsed}
      itemsList={itemsList}
      actionToggle={
        <Button
          data-testid="sidebar-toggle"
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onToggleSidebar}
          square
          size={ButtonSize.L}
        >
          {collapsed ? '>' : '<'}
        </Button>
      }
      actions={
        <>
          <ThemeSwitcher />
          <LanguageSwitcher short={collapsed} />
        </>
      }
    />
  );
});
