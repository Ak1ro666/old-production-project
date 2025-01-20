import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import Icon from '@/shared/assets/test/avatar.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Big: Story = {
  args: {
    size: 150,
    src: Icon,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: Icon,
  },
};
