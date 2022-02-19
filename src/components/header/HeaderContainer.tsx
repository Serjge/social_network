import { connect } from 'react-redux';

import { mapStateToPropsType, HeaderAPIContainer } from './HeaderAPIContainer';

// import { HeaderAPIContainer } from 'components';
import { AppStateType } from 'store';
import { setToggleIsFetching } from 'store/actions';
import { getAuthIsFetching, getIsAuth, getLogin } from 'store/selectors';
import { logout } from 'store/thunks';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  login: getLogin(state),
  isFetching: getAuthIsFetching(state),
  auth: getIsAuth(state),
});

export const HeaderContainer = connect(mapStateToProps, {
  setToggleIsFetching,
  logout,
})(HeaderAPIContainer);
