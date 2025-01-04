import { useCallback, useMemo, useState } from 'react';
import { sidebarItemsList } from '../model/items';
import { SidebarItem } from '../ui/SidebarItem/SidebarItem';

export function useSidebar() {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggleSidebar = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemsList = sidebarItemsList.map((item) => (
        <SidebarItem item={item} key={item.text} collapsed={collapsed} />
    ));

    return {
        collapsed,
        onToggleSidebar,
        itemsList,
    };
}
