import React from 'react';
import style from './TextArea.module.scss'
import {WrappedFieldProps} from "redux-form/lib/Field";

interface TextAreaPropsType extends WrappedFieldProps {
  placeholder: string
  type?: string
}

export function TextArea({
                           input,
                           placeholder,
                           meta: {touched, error, warning}
                         }: TextAreaPropsType) {
  const hasError = touched && error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : '')}>
      <div>
        <textarea  {...input} placeholder={placeholder}/>
      </div>
      <div>
        {touched && ((error && <span>{error}</span>) || (warning &&
            <span>{warning}</span>))}
      </div>
    </div>
  );
}

export function Input({
                        input,
                        placeholder,
                        type,
                        meta: {touched, error, warning}
                      }: TextAreaPropsType) {
  const hasError = touched && error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : '')}>
      <div>
        <input  {...input} placeholder={placeholder} type={type}/>
      </div>
      <div>
        {touched && ((error && <span>{error}</span>) || (warning &&
            <span>{warning}</span>))}
      </div>
    </div>
  );
}
