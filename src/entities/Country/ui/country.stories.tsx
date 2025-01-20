import { Meta, StoryObj } from '@storybook/react/*';
import { CountrySelect } from './country-select';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Country',
  component: CountrySelect,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
