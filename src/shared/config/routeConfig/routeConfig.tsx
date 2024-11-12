import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const ROUTE_PATHS: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: ROUTE_PATHS.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: ROUTE_PATHS.about,
        element: <AboutPage />,
    },
};
