import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { InputTheme } from './Input.types';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Введите данные',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    theme: InputTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: InputTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
