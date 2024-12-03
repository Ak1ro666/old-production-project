import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
    test('test render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
