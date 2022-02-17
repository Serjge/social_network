import { applyMiddleware, combineReducers, createStore } from 'redux';
import { ActionsProfileType, ProfileReducer } from 'store/reducers/ProfileReducer';
import { ActionsDialogsType, DialogsReducer } from 'store/reducers/DialogsReducer';
import { ActionsUsersType, UsersReducer } from 'store/reducers/UsersReducer';
import { ActionsAuthType, AuthReducer } from 'store/reducers/AuthReducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { ActionsAppType, AppReducer } from 'store/reducers/AppReducer';

export let rootReducer = combineReducers({
  profilePage: ProfileReducer,
  dialogsPage: DialogsReducer,
  usersPage: UsersReducer,
  authPage: AuthReducer,
  form: formReducer,
  app: AppReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionAllType = ActionsUsersType
  | ActionsAppType
  | ActionsAuthType
  | ActionsDialogsType
  | ActionsProfileType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
  AppStateType,
  unknown,
  ActionAllType>