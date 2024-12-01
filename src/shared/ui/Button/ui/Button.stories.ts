import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { ThemeButton } from './Button.props';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        theme: ThemeButton.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'PrimaryDark',
        theme: ThemeButton.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        theme: ThemeButton.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'SecondaryDark',
        theme: ThemeButton.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
