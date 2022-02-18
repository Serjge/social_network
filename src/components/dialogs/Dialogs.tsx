import { ComponentType, PureComponent, ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import style from './Dialogs.module.scss';
import { DialogsMessage } from './dialogsMessage';

import { TextArea } from 'components/common';
import { DialogsPropsType } from 'components/dialogs/DialogsContainer';
import { DialogsName } from 'components/dialogs/dialogsName';
import { maxLengthCreator, requiredField } from 'utils';

const lengthText = 50;
const maxLength50 = maxLengthCreator(lengthText);

const DialogTextArea: ComponentType<InjectedFormProps<DialogTextAreaDataType>> = ({
  handleSubmit,
}: InjectedFormProps<DialogTextAreaDataType>) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      name="newMessage"
      placeholder="Add message"
      component={TextArea}
      validate={[requiredField, maxLength50]}
    />
    {/* eslint-disable-next-line react/button-has-type */}
    <button>Add Message</button>
  </form>
);

const ReduxDialogTextArea = reduxForm<DialogTextAreaDataType>({
  form: 'newMessageDialog',
})(DialogTextArea);

//
export class Dialogs extends PureComponent<DialogsPropsType> {
  render(): ReactElement {
    const { addMessageHandler, dialogs, messages } = this.props;

    const dialogsElement = dialogs.map(({ id, name }) => (
      <DialogsName id={id} name={name} key={id} />
    ));

    const dialogsMessage = messages.map(m => (
      <DialogsMessage key={m.id} message={m.message} />
    ));

    const onChangeMessage = (formData: DialogTextAreaDataType): void => {
      addMessageHandler(formData.newMessage);
    };

    return (
      <>
        <div>Dialog</div>
        <div className={style.dialogs__wrapper}>
          <div className={style.dialogs__list}>{dialogsElement}</div>
          <div className={style.dialogs__messages}>
            {dialogsMessage}
            <ReduxDialogTextArea onSubmit={onChangeMessage} />
          </div>
        </div>
      </>
    );
  }
}

type DialogTextAreaDataType = {
  newMessage: string;
};
