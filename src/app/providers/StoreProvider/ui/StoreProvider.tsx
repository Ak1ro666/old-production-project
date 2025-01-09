import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../model/store';
import { StateSchema } from '../model/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export function StoreProvider({
  children,
  initialState,
  asyncReducers,
}: {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}) {
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
}
