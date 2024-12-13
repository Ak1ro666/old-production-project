import { configureStore } from '@reduxjs/toolkit';
import { ReactRenderer } from '@storybook/react/*';
import { Provider } from 'react-redux';
import { PartialStoryFn } from 'storybook/internal/types';

export function StoreDecorator(Story: PartialStoryFn<ReactRenderer>) {
    const store = configureStore({
        reducer: {},
    });

    return (
        <Provider store={store}>
            <Story />
        </Provider>
    );
}
