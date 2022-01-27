import React from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export function Dialogs({
                            addMessageHandler,
                            // OnChangeHandler,
                            dialogsPage,
                        }: DialogsPropsType) {

    const dialogsElement = dialogsPage.dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    const dialogsMessage = dialogsPage.messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    const onChangeMessage = (formData:DialogTextAreaDataType) => {
        addMessageHandler(formData.newMessage)
    }

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <ReduxDialogTextArea onSubmit={onChangeMessage}/>
            </div>
        </div>
    )
}

type DialogTextAreaDataType = {
    newMessage: string
}

const DialogTextArea: React.ComponentType<InjectedFormProps<DialogTextAreaDataType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <Field type={'text'} name={'newMessage'} placeholder={'Add message'} component={'textarea'}/>
            <button>Add Message</button>
        </form>

    );
};

const ReduxDialogTextArea = reduxForm<DialogTextAreaDataType>({form: 'newMessageDialog'})(DialogTextArea)