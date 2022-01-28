import React from 'react'
import {Header} from "./Header";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {getAuthUserData, logout, setToggleIsFetching} from "../../Redux/AuthReducer";
import {Preloader} from "../common/preloader/Preloader";

type mapStateToPropsType = {
    login: string
    email: string
    usersId: string
    isFetching: boolean
    auth: boolean
}

type mapDispatchToPropsType = {
    setToggleIsFetching: (isFetching: boolean) => void
    getAuth: () => void
    logout: ()=>void
}

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerType, HeaderAPIContainerType> {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <>{this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.authPage.data.login,
        email: state.authPage.data.email,
        usersId: state.authPage.data.userId,
        isFetching: state.authPage.isFetching,
        auth: state.authPage.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setToggleIsFetching,
    getAuth: getAuthUserData,
    logout,
})(HeaderAPIContainer)