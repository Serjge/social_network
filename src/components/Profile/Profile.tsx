import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, store} from "../../Redux/State";

type ProfilePropsType = {
    profileDate: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
    console.log('render profile')
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch.bind(store)}
                     profileDate={props.profileDate}/>
        </div>
    )
}
