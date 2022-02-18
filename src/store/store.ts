import { applyMiddleware, combineReducers, createStore } from 'redux';

import { UsersReducer } from 'store/reducers';
import {  ProfileReducer } from 'store/reducers/profileReducer';
import {  DialogsReducer } from 'store/reducers/dialogsReducer';

import {  AuthReducer } from 'store/reducers/authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {  AppReducer } from 'store/reducers/appReducer';

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


