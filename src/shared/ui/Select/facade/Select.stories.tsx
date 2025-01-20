import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '1', content: 'Option 1' },
      { value: '2', content: 'Option 2' },
      { value: '3', content: 'Option 3' },
    ],
  },
};
