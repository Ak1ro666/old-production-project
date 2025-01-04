import { Meta, StoryObj } from '@storybook/react/*';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione rerum nobis earum impedit voluptatibus mollitia magni, sed expedita dicta?',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
