import { ThunkAction } from 'redux-thunk';

import { ActionAllType } from 'store/actions/type';
import { AppStateType } from 'store/store';

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  ActionAllType
>;
