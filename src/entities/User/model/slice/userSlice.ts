import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions, reducer: userReducer } = counterSlice;
