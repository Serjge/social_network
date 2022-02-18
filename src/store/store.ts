import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import { UsersReducer } from 'store/reducers';
import { AppReducer } from 'store/reducers/appReducer';
import { AuthReducer } from 'store/reducers/authReducer';
import { DialogsReducer } from 'store/reducers/dialogsReducer';
import { ProfileReducer } from 'store/reducers/profileReducer';

export const rootReducer = combineReducers({
  profilePage: ProfileReducer,
  dialogsPage: DialogsReducer,
  usersPage: UsersReducer,
  authPage: AuthReducer,
  form: formReducer,
  app: AppReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
