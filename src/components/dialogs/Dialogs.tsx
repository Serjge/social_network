import { ComponentType, PureComponent, ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import style from './Dialogs.module.scss';

import { DialogsMessage, DialogsPropsType, TextArea, DialogsName } from 'components';
import { maxLengthCreator, requiredField } from 'utils';

type DialogTextAreaDataType = {
  newMessage: string;
};

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
    <button type="submit">Add Message</button>
  </form>
);

const ReduxDialogTextArea = reduxForm<DialogTextAreaDataType>({
  form: 'newMessageDialog',
})(DialogTextArea);

export class Dialogs extends PureComponent<DialogsPropsType> {
  render(): ReactElement {
    const { addMessageHandler, dialogs, messages } = this.props;

    const dialogsElement = dialogs.map(({ id, name }) => (
      <DialogsName id={id} name={name} key={id} />
    ));

    const dialogsMessage = messages.map(({ message, id }) => (
      <DialogsMessage key={id} message={message} />
    ));

    const onChangeMessage = (formData: DialogTextAreaDataType): void => {
      addMessageHandler(formData.newMessage);
    };

    return (
      <>
        <div>Dialog</div>
        <div className={style.wrapper}>
          <div className={style.list}>{dialogsElement}</div>
          <div className={style.messages}>
            {dialogsMessage}
            <ReduxDialogTextArea onSubmit={onChangeMessage} />
          </div>
        </div>
      </>
    );
  }
}
