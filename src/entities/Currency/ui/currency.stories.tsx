import { Meta, StoryObj } from '@storybook/react/*';
import { CurrencySelect } from './currency-select';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/Currency',
  component: CurrencySelect,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
