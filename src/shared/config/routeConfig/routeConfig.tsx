import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',

    // last route
    NOT_FOUND = 'not_found',
}

export const ROUTE_PATHS: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',

    // last route
    [AppRoutes.NOT_FOUND]: '*',
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

    // last route
    [AppRoutes.NOT_FOUND]: {
        path: ROUTE_PATHS.not_found,
        element: <NotFoundPage />,
    },
};
