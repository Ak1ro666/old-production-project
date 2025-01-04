import React, { FC, SVGProps } from 'react';

import { ROUTE_PATHS } from '@/shared/config/routeConfig/routeConfig';

import MainIcon from '@/shared/assets/main-icon.svg';
import AboutIcon from '@/shared/assets/about-icon.svg';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
};

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: ROUTE_PATHS.main,
    text: 'главная',
    Icon: MainIcon,
  },
  {
    path: ROUTE_PATHS.about,
    text: 'о нас',
    Icon: AboutIcon,
  },
  {
    path: ROUTE_PATHS.profile,
    text: 'профиль',
    Icon: MainIcon,
  },
];
