import { withAuthRedirect } from 'hoc';
import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';


import { AppStateType } from 'store';
import { AddMessage, DialogType, MessagesType } from 'store/reducers/DialogsReducer';

import { getDialogs, getMessages } from 'store/selectors';
import { Dialogs } from './Dialogs';


type mapStateToPropsType = {
  dialogs: DialogType[];
  messages: MessagesType[];
};
type mapDispatchToPropsType = {
  addMessageHandler: (newText: string) => void;
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  dialogs: getDialogs(state),
  messages: getMessages(state),
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  addMessageHandler: newText => {
    dispatch(AddMessage(newText));
  },
});

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

