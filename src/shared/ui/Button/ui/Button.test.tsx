import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeButton } from './Button.props';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
