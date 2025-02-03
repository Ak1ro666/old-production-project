import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';
import { axiosClassic } from '@/shared/api/instance';
import { NavigateFunction } from 'react-router-dom';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/entities/Profile';
import { counterReducer } from '@/entities/Counter';
import { articleReducer } from '@/entities/Article';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: axiosClassic,
            navigate,
          },
        },
      }),
  });

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
