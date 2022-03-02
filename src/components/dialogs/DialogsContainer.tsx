import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { Dialogs } from './Dialogs';

import { withAuthRedirect } from 'hoc';
import { AppStateType } from 'store';
import { addMessage } from 'store/actions';
import { getDialogs, getMessages } from 'store/selectors';
import { DialogType, MessagesType } from 'type';

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
    dispatch(addMessage(newText));
  },
});

const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

export default DialogsContainer;
