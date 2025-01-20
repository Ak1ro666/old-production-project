import { Meta, StoryObj } from '@storybook/react/*';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthLight: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          username: 'username',
        },
      },
    }),
  ],
};

export const AuthDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {
          username: 'username',
        },
      },
    }),
  ],
};
