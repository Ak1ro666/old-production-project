import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppLink } from './AppLink';
import { AppLinkTheme } from './AppLink.props';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'PrimaryDark',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'SecondaryDark',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedPrimary: Story = {
    args: {
        children: 'InvertedPrimary',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
};

export const InvertedPrimaryDark: Story = {
    args: {
        children: 'InvertedPrimaryDark',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedSecondary: Story = {
    args: {
        children: 'InvertedSecondary',
        theme: AppLinkTheme.INVERTED_SECONDARY,
    },
};

export const InvertedSecondaryDark: Story = {
    args: {
        children: 'InvertedSecondaryDark',
        theme: AppLinkTheme.INVERTED_SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
