import React from 'react'
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {
    AddLike,
    addPost,
    ChangeNewText,
    getProfile,
    getStatus,
    ProfileType,
    RemovePost,
    updateStatus
} from "../../Redux/ProfileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";
import {InjectedProps, withRouter} from "../../hoc/withRouter/withRouter";

type mapStateToPropsType = {
    profile: ProfileType
    status: string
}
type mapDispatchToPropsType = {
    addPost: () => void
    ChangeNewText: (newPostText: string) => void
    RemovePost: (removeId: string) => void
    AddLike: (LikeId: string, isLike: boolean) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (userId: string) => void
}

export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & InjectedProps

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = '21501';
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        // console.log(this.props)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            addPost,
            ChangeNewText,
            RemovePost,
            AddLike,
            getProfile,
            getStatus,
            updateStatus,
        }),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)
