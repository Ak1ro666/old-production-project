/* eslint-disable operator-linebreak */
import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
        (Story: PartialStoryFn<ReactRenderer>) => {
            return (
                <StoreProvider
                    initialState={state as StateSchema}
                    asyncReducers={{
                        ...defaultAsyncReducers,
                        ...asyncReducers,
                    }}
                >
                    <Story />
                </StoreProvider>
            );
        };
