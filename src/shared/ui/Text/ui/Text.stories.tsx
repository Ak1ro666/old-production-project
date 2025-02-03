import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from './Text';
import { TextTheme, TextSize } from './Text.props';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'Lorem text',
    title: 'Lorem title',
  },
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: 'Lorem text',
    title: 'Lorem title',
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'Lorem text',
    title: 'Lorem title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: 'Lorem text',
    title: 'Lorem title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem text',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem title',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Lorem text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextSizeM: Story = {
  args: {
    title: 'Lorem title',
    text: 'Lorem text',
    size: TextSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextSizeL: Story = {
  args: {
    title: 'Lorem title',
    text: 'Lorem text',
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
