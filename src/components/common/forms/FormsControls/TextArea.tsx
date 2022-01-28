import React from 'react';
import style from './TextArea.module.scss'

export function TextArea({input, label,  meta: {touched, error, warning}}: any) {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                <textarea  {...input} placeholder={label}/>
            </div>
            <div>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}
export function Input({input, label, type,  meta: {touched, error, warning}}: any) {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                <input  {...input} placeholder={label} type={type}/>
            </div>
            <div>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}
