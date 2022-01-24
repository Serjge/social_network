import React from "react";
import {useLocation, useParams} from "react-router-dom";

export type locationType = {
    hash: string
    key: string
    pathname: string
    search: string
    state: object | null
}

export type InjectedProps = {
    userId: string
    location: locationType
}

export function withRouter<T>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {

        const params = useParams<'userId'>();
        const location = useLocation()
        return (

            <WrappedComponent
                {...props as T}
                userId={params.userId}
                location={location}
            />
        );
    }
}

export function withRouter2(Component:any) {
    function ComponentWithRouterProp(props: typeof Component) {
        const params = useParams<'userId'>();
        return (
            <Component
                {...props}
                userId={params.userId}
            />
        );
    }
    return ComponentWithRouterProp;
}