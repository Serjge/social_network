import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";

export let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    authPage: AuthReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)