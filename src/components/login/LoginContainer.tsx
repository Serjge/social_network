import { connect } from 'react-redux';

import { LoginApiComponent, mapStateToPropsType } from './LoginApiComponent';

import { AppStateType } from 'store';
import { login } from 'store/thunks';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.authPage.isAuth,
});

export const LoginContainer = connect(mapStateToProps, { login })(LoginApiComponent);
