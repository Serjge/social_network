import { PureComponent, ReactElement } from 'react';

import style from './TextArea.module.scss';

import { FormPropsType } from '.';

export class TextArea extends PureComponent<FormPropsType> {
  render(): ReactElement {
    const {
      input,
      placeholder,
      meta: { touched, error, warning },
    } = this.props;

    const hasError = touched && error;

    return (
      <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
        <div>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <textarea {...input} placeholder={placeholder} />
        </div>
        <div>
          {touched &&
            ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
}
