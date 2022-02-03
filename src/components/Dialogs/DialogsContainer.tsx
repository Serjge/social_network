import {AddMessage, DialogType, MessagesType} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux_store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";
import React from "react";
import {getDialogs, getMessages} from "../../Redux/dialogsSelectors";

type mapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessagesType[]
}
type mapDispatchToPropsType = {
    addMessageHandler: (newText:string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessageHandler: (newText) => {
            dispatch(AddMessage(newText))
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
