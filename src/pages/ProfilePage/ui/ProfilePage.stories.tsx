import { Meta, StoryObj } from '@storybook/react/*';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { ProfilePage } from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        formData: {
          username: 'admin',
          age: 22,
          city: 'Moscow',
          country: Country.Armenia,
          currency: Currency.USD,
          first: 'Ivan',
          lastname: 'Ivanov',
        },
        data: {
          username: 'admin',
          age: 22,
          city: 'Moscow',
          country: Country.Armenia,
          currency: Currency.USD,
          first: 'Ivan',
          lastname: 'Ivanov',
          avatar: '',
        },
        readonly: true,
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
