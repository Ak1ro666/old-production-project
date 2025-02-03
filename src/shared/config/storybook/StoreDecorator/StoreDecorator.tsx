import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PartialStoryFn } from 'storybook/internal/types';

import { StateSchema } from '@/app/providers/StoreProvider';
import { profileReducer } from '@/entities/Profile';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByUsername';
import { ReactRenderer } from '@storybook/react/*';
import { counterReducer } from '@/entities/Counter';
import { articleReducer } from '@/entities/Article';

export const StoreDecorator =
  (state?: DeepPartial<StateSchema>) => (StoryComponent: PartialStoryFn<ReactRenderer>) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
      counter: counterReducer,
      profile: profileReducer,
      user: userReducer,
      loginForm: loginReducer,
      article: articleReducer,
    };

    const store = configureStore({
      reducer: rootReducers,
      preloadedState: state as StateSchema,
    });

    return (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    );
  };
