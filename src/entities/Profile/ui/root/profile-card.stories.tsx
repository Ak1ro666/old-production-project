import type { Meta, StoryObj } from '@storybook/react';

import { Root } from './root';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Root> = {
  title: 'entities/ProfileCard',
  component: Root,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Root>;

export const Light: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      first: 'Ivan',
      lastname: 'Ivanov',
      avatar,
    },
  },
};

export const Dark: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      first: 'Ivan',
      lastname: 'Ivanov',
      avatar,
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const withErrorLight: Story = {
  args: {
    error: "Profile doesn't exist",
  },
};

export const withErrorDark: Story = {
  args: {
    error: "Profile doesn't exist",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const withLoadingLight: Story = {
  args: {
    isLoading: true,
  },
};

export const withLoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
