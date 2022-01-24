import React from 'react'
import s from './ProfileInfo.module.scss'
import {ProfileType} from "../../../Redux/ProfileReducer";
import avatarDefault from '../../../assets/img/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.png'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
}

export const ProfileInfo = ({profile, status}:ProfileInfoPropsType) => {

    return (
        <div>
            <div className={s.content}><img alt=''
                                            src='https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1'/>
            </div>
            <div className={s.avatar}><img alt=''
                                           src={profile && profile.photos.large !== null ? profile.photos.large : avatarDefault}/>
               <div style={{ padding: '20px', textAlign:'center'}}> {profile && profile.fullName}</div>
                <ProfileStatus status={status}/>
            </div>
        </div>
    )
}
