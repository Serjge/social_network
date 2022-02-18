import { WrappedFieldProps } from 'redux-form/lib/Field';

export interface FormPropsType extends WrappedFieldProps {
  placeholder: string;
  type?: string;
}
