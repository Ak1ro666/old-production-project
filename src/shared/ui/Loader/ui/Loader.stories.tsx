import { Meta, StoryObj } from '@storybook/react/*';
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
