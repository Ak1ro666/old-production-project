import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';

export const StoreDecorator =
  (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: PartialStoryFn<ReactRenderer>) => (
    <StoreProvider initialState={state} asyncReducers={{ ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
