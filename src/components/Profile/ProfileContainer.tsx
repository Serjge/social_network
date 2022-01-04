import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redux/redux_store";
import {connect} from "react-redux";
import {AddLike, addPost, ChangeNewText, ProfileType, RemovePost, setUserProfile} from "../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";

type mapStateToPropsType = {
    profile: ProfileType
    id?: number
}

type mapDispatchToPropsType = {
    addPost: () => void
    ChangeNewText: (newPostText: string) => void
    RemovePost: (removeId: string) => void
    AddLike: (LikeId: string, isLike: boolean) => void
    setUserProfile: (profile: ProfileType) => void
}
export type ProfileAPIContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type ParamsType = {
    userId: string
}

const withRouter = (WrappedComponent:any) => (props:any)   => {

    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType & { params: ParamsType }> {


    componentDidMount() {

        let userId = this.props.params.userId;
        if (!userId) {
            userId = '21501';
        }
        debugger

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            // <Profile {...this.props} profile={this.props.profile}/>
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

