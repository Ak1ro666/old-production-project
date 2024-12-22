import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
};

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxWithStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
