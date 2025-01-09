import { ROUTE_PATHS } from '@/shared/config/routeConfig/routeConfig';

import MainIcon from '@/shared/assets/main-icon.svg';
import AboutIcon from '@/shared/assets/about-icon.svg';
import ProfileIcon from '@/shared/assets/profile-icon.svg';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
};

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: ROUTE_PATHS.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: ROUTE_PATHS.about,
    text: 'О нас',
    Icon: AboutIcon,
  },
  {
    path: ROUTE_PATHS.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
