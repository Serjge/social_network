import React from 'react'
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {
    AddLike,
    addPost,
    requestProfile,
    requestStatus,
    ProfileType,
    RemovePost,
    updateStatus
} from "../../Redux/ProfileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";
import {InjectedProps, withRouter} from "../../hoc/withRouter/withRouter";
import {getUserId} from "../../Redux/authSelectors";
import {getProfile, getStatus} from '../../Redux/profileSelectors';

type mapStateToPropsType = {
    profile: ProfileType
    status: string
    authUserId: string
}
type mapDispatchToPropsType = {
    addPost: (newText: string) => void
    RemovePost: (removeId: string) => void
    AddLike: (LikeId: string, isLike: boolean) => void
    requestProfile: (userId: string) => void
    requestStatus: (userId: string) => void
    updateStatus: (userId: string) => void
}

export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & InjectedProps

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId

        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.requestProfile(userId)
        this.props.requestStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authUserId: getUserId(state)

    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            addPost,
            RemovePost,
            AddLike,
            requestProfile,
            requestStatus,
            updateStatus,
        }),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)
