import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
