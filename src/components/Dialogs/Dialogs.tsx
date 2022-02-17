import style from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/forms/FormsControls/TextArea";
import {maxLengthCreator, requiredField} from "utils/validator/validator";

export function Dialogs({
                            addMessageHandler,
                            dialogs,
                            messages,
                        }: DialogsPropsType) {

    const dialogsElement = dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    const dialogsMessage = messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    const onChangeMessage = (formData: DialogTextAreaDataType) => {
        addMessageHandler(formData.newMessage)
    }

    return (
        <div className={style.dialogs__wrapper}>
            <div className={style.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={style.dialogs__messages}>
                {dialogsMessage}
                <ReduxDialogTextArea onSubmit={onChangeMessage}/>
            </div>
        </div>
    )
}

type DialogTextAreaDataType = {
    newMessage: string
}
const maxLength50 = maxLengthCreator(50)

const DialogTextArea: React.ComponentType<InjectedFormProps<DialogTextAreaDataType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <Field type={'text'}
                   name={'newMessage'}
                   placeholder={'Add message'}
                   component={TextArea}
                   validate={[requiredField, maxLength50]}/>
            <button>Add Message</button>
        </form>

    );
};

const ReduxDialogTextArea = reduxForm<DialogTextAreaDataType>({form: 'newMessageDialog'})(DialogTextArea)