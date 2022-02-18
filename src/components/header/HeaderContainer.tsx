// import { Component } from 'react';
// import {Header} from "./Header";
// import {AppStateType} from "store/store";
// import {connect} from "react-redux";
// import {logout, setToggleIsFetching} from "store/reducers/AuthReducer";
// import {Preloader} from "../common/preloader/Preloader";
// import {getAuthIsFetching, getEmail, getIsAuth, getLogin, getUserId} from "store/selectors/authSelectors";
//
// type mapStateToPropsType = {
//     login: string
//     email: string
//     usersId: string
//     isFetching: boolean
//     auth: boolean
// }
//
// type mapDispatchToPropsType = {
//     setToggleIsFetching: (isFetching: boolean) => void
//     logout: ()=>void
// }
//
// type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType
//
// export class HeaderAPIContainer extends Component<HeaderAPIContainerType, HeaderAPIContainerType> {
//
//     render() {
//         return <>{this.props.isFetching ? <Preloader/> : null}
//             <Header {...this.props} />
//         </>
//     }
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         login: getLogin(state),
//         email: getEmail(state),
//         usersId: getUserId(state),
//         isFetching: getAuthIsFetching(state),
//         auth: getIsAuth(state)
//     }
// }
//
// export const HeaderContainer = connect(mapStateToProps, {
//     setToggleIsFetching,
//     logout,
// })(HeaderAPIContainer)

import { connect } from 'react-redux';

import { HeaderAPIContainer, mapStateToPropsType } from './HeaderAPIContainer';

import { logout, setToggleIsFetching } from 'store/actions';
import { getAuthIsFetching, getIsAuth, getLogin } from 'store/selectors';
import { AppStateType } from 'store/store';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  login: getLogin(state),
  isFetching: getAuthIsFetching(state),
  auth: getIsAuth(state),
});

export const HeaderContainer = connect(mapStateToProps, {
  setToggleIsFetching,
  logout,
})(HeaderAPIContainer);
