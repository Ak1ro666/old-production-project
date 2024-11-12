import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <main className="content-page">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}
