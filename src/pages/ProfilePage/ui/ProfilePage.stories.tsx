import { Meta, StoryObj } from '@storybook/react/*';
import { ProfilePage } from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
