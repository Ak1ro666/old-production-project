import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthRouteProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

export function AppRouter() {
  const renderWithWrapper = useCallback((route: AuthRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <section className="page-wrapper">{route.element}</section>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.auth ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
