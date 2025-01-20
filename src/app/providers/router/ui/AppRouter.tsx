import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

export function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = Object.values(routeConfig).filter((route) => {
    if (route.auth && !isAuth) {
      return false;
    }

    return true;
  });

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <section className="page-wrapper">{element}</section>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
}
