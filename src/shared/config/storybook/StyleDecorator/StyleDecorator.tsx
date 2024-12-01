import '@/app/styles/index.scss';

import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';

export const StyleDecorator = (Story: PartialStoryFn<ReactRenderer>) => <Story />;
