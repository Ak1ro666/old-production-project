import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../model/store';
import { StateSchema } from '../model/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

export function StoreProvider({
  children,
  initialState,
  asyncReducers,
}: {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}) {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
}
