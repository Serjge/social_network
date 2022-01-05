import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {AddLike, addPost, ChangeNewText, ProfileType, RemovePost, setUserProfile} from "../../Redux/ProfileReducer";
import {withRouter, WrappedComponentWithRouterPropsType} from '../common/withRouter/withRouter';

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
export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType & WrappedComponentWithRouterPropsType> {

    componentDidMount() {
        let userId: string = this.props.params.userId
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
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect(mapStateToProps, {
    addPost,
    ChangeNewText,
    RemovePost,
    AddLike,
    setUserProfile,
})(WithUrlDataContainerComponent)

