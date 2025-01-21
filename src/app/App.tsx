import { Suspense, useEffect } from 'react';

import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/shared/ui/Loader';
import { useDispatch } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

export const App = () => {
  const inited = useAppSelector(getUserInited);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </main>
      </Suspense>
    </div>
  );
};
