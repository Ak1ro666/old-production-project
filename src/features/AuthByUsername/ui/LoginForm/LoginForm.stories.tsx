import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        }),
    ],
};

export const LoginFormDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        }),
    ],
};

export const withError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                error: 'ERROR',
            },
        }),
    ],
};

export const isLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: true,
            },
        }),
    ],
};
