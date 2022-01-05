import React from "react";
import {useLocation, useParams} from "react-router-dom";

export type ParamsType = {
    userId: string
}
export type locationType = {
    hash: string
    key: string
    pathname: string
    search: string
    state: null
}

export type WrappedComponentWithRouterPropsType = {
    params: ParamsType
    location: locationType
}

export function withRouter (WrappedComponent: typeof React.Component) {
    function WrappedComponentWithRouterProps(props: object) {

        const params = useParams();
        const location = useLocation()

        return (
            <WrappedComponent
                {...props}
                params={params}
                location={location}
        />
    );
    }
    return WrappedComponentWithRouterProps
}