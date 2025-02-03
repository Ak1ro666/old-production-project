import { memo } from 'react';
import { Layout } from '../../ui/root';
import { useSidebar } from '../../view-model/use-sidebar';

import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

export const Sidebar = memo(() => {
  const sidebar = useSidebar();

  return (
    <Layout
      collapsed={sidebar.collapsed}
      itemsList={sidebar.itemsList}
      actionToggle={
        <Button
          data-testid="sidebar-toggle"
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={sidebar.onToggleSidebar}
          size={ButtonSize.L}
          square
        >
          {sidebar.collapsed ? '>' : '<'}
        </Button>
      }
      actions={
        <>
          <ThemeSwitcher />
          <LanguageSwitcher short={sidebar.collapsed} />
        </>
      }
    />
  );
});
