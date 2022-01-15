import React from 'react'
import {Header} from "./Header";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {setToggleIsAuth, setToggleIsFetching, setUserAuth} from "../../Redux/AuthReducer";
import {Preloader} from "../common/preloader/Preloader";
import {authApi} from "../../api/userApi";

type mapStateToPropsType = {
    login: string
    email: string
    usersId: string
    isFetching: boolean
    auth: boolean
}

type mapDispatchToPropsType = {
    setToggleIsFetching: (isFetching: boolean) => void
    setUserAuth: (usersId: string, email: string, login: string) => void
    setToggleIsAuth: (auth: boolean) => void
}

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerType, HeaderAPIContainerType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        authApi.getAuth().then(response => {
            this.props.setToggleIsFetching(false)
            if (response.resultCode === 0) {
                this.props.setUserAuth(
                    response.data.usersId,
                    response.data.email,
                    response.data.login
                )
                this.props.setToggleIsAuth(true)
            }
            this.props.setToggleIsFetching(false)
        })
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
        usersId: state.authPage.data.usersId,
        isFetching: state.authPage.isFetching,
        auth: state.authPage.auth
    }
}
export const HeaderContainer = connect(mapStateToProps, {
    setUserAuth,
    setToggleIsFetching,
    setToggleIsAuth
})(HeaderAPIContainer)