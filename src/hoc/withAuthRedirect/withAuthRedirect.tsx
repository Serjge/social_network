import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authPage.isAuth
    }
}

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <WrappedComponent {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}
