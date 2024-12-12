import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        placeholder: 'Введите данные',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    args: {},
};

export const LoginFormDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
