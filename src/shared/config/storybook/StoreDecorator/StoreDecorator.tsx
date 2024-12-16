/* eslint-disable operator-linebreak */
import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (Story: PartialStoryFn<ReactRenderer>) => {
        return (
            <StoreProvider initialState={state as StateSchema}>
                <Story />
            </StoreProvider>
        );
    };
