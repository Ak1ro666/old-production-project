import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';
import { Theme } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) => {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
