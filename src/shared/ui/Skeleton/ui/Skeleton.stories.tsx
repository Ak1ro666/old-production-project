import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '../ui/Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {},
};

export const Normal: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
