import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { axiosClassic } from '@/shared/api/instance';
import { NavigateFunction } from 'react-router-dom';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/entities/Profile';
import { counterReducer } from '@/entities/Counter';

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

  // @ts-ignore
  // store.reducerManager = reducerManager;

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
