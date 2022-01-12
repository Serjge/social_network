import React, {ComponentType} from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {AddLike, addPost, ChangeNewText, ProfileType, RemovePost, setUserProfile} from "../../Redux/ProfileReducer";
import {InjectedProps, withRouter2} from '../common/withRouter/withRouter';
import {compose} from "redux";

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    addPost: () => void
    ChangeNewText: (newPostText: string) => void
    RemovePost: (removeId: string) => void
    AddLike: (LikeId: string, isLike: boolean) => void
    setUserProfile: (profile: ProfileType) => void
}

export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & InjectedProps

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = '21501';
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        setUserProfile,
    }),
    withRouter2)(ProfileAPIContainer)

