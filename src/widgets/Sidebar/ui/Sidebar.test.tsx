import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
    test('test render', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
