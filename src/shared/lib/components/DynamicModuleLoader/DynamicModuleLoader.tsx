import { StateSchemaKey } from '@/app/providers/StoreProvider';
import { ReduxWithStoreManager } from '@/app/providers/StoreProvider/model/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export function DynamicModuleLoader({
  children,
  reducers,
  removeAfterUnmount,
}: {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}) {
  const store = useStore() as ReduxWithStoreManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
