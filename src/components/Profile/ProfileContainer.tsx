import React, {ComponentType} from 'react'
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {AddLike, addPost, ChangeNewText, getProfile, ProfileType, RemovePost} from "../../Redux/ProfileReducer";
import {InjectedProps, withRouter} from '../../hoc/withRouter/withRouter';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect/withAuthRedirect";

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    addPost: () => void
    ChangeNewText: (newPostText: string) => void
    RemovePost: (removeId: string) => void
    AddLike: (LikeId: string, isLike: boolean) => void
    getProfile: (userId: string) => void
}

export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & InjectedProps

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = '21501';
        }
        this.props.getProfile(userId)

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile

    }
}

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps,
        {
            addPost,
            ChangeNewText,
            RemovePost,
            AddLike,
            getProfile,
        }),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)
