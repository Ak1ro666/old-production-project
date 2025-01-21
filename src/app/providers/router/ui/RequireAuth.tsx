import { getUserAuthData } from '@/entities/User';
import { ROUTE_PATHS } from '@/shared/config/routeConfig/routeConfig';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const authData = useAppSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate state={{ from: location }} to={ROUTE_PATHS.main} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
