import {AddMessageAC, ChangeNewDialogCallBackAC, DialogsPageType} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux_store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchToPropsType = {
    addMessage: () => void
    OnChangeHandler: (message: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
