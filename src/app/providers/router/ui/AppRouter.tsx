import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<section className="page-wrapper">{element}</section>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
