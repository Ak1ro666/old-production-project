import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('action decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({
            value: 9,
        });
    });
    test('action increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({
            value: 11,
        });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
