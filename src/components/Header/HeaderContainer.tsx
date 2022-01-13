import React from 'react'
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {setUserAuth, setToggleIsFetching, setToggleIsAuth} from "../../Redux/AuthReducer";
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
    setUserAuth: (usersId: string, email: string, login: string) => void
    setToggleIsAuth: (auth:boolean)=> void
}

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerType, HeaderAPIContainerType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers:     {
                "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
            }
        }).then(response => {
            this.props.setToggleIsFetching(false)
            const a = response.data.data
            if (response.data.resultCode === 0) {
                this.props.setUserAuth(a.usersId, a.email, a.login)
                this.props.setToggleIsAuth(true)
            }
            this.props.setToggleIsFetching(false)
        })
    }

    render() {
        return  <>{this.props.isFetching? <Preloader/>: null}
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