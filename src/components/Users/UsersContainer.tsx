import {follow, requestUsers, toggleFollowingInProgress, unFollow, UserType} from "store/reducers/UsersReducer";
import {connect} from "react-redux";
import {AppStateType} from "store/store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getUsersIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "store/selectors/usersSelectors";

type mapStateToPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}

type mapDispatchToPropsType = {
    toggleFollowingInProgress: (isFollow: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.requestUsers(1, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>{this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}
                       onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getUsersIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        toggleFollowingInProgress,
        requestUsers,
        follow,
        unFollow,
    }),
    withAuthRedirect
)(UsersAPIComponent)


