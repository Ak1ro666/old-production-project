import { ReactRenderer } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from 'storybook/internal/types';

export function RouterDecorator(Story: PartialStoryFn<ReactRenderer>) {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
}
