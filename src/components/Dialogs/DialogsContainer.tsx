import {AddMessageAC, ChangeNewDialogCallBackAC, DialogsPageType} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux_store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    addMessage: () => void
    OnChangeHandler: (message: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.authPage.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC())
            dispatch(ChangeNewDialogCallBackAC(''))
        },
        OnChangeHandler: (message: string) => {
            dispatch(ChangeNewDialogCallBackAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)