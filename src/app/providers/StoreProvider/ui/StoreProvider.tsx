import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../model/store';
import { StateSchema } from '../model/StateSchema';

export function StoreProvider({
    children,
    initialState,
}: {
    children: ReactNode;
    initialState?: StateSchema;
}) {
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
}
