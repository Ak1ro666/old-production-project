import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/theme';
import { classNames } from '../shared/lib/classNames/classNames';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<div>
				<Link to='/'>main</Link>
				<Link to='/about'>about</Link>
			</div>
			<Suspense fallback={<div>...loading</div>}>
				<Routes>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
