import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AuthRouteProps = RouteProps & {
  auth?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last route
  NOT_FOUND = 'not_found',
}

export const ROUTE_PATHS: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // last route
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AuthRouteProps> = {
  [AppRoutes.MAIN]: {
    path: ROUTE_PATHS.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: ROUTE_PATHS.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: ROUTE_PATHS.profile,
    element: <ProfilePage />,
    auth: true,
  },

  // last route
  [AppRoutes.NOT_FOUND]: {
    path: ROUTE_PATHS.not_found,
    element: <NotFoundPage />,
  },
};
