import { StateSchema } from '@/app/providers/StoreProvider';
import { axiosClassic } from '@/shared/api/instance';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('@/shared/api/instance');

const mockedAxiosClassic = jest.mocked(axiosClassic, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  navigate: jest.MockedFn<any>;
  api: jest.MockedFunctionDeep<AxiosInstance>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.navigate = jest.fn();
    this.api = mockedAxiosClassic;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
    return result;
  }
}
