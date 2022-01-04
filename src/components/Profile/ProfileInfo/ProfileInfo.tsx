import React from 'react'
import s from './ProfileInfo.module.scss'
import {ProfileType} from "../../../Redux/ProfileReducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = ({profile}:ProfileInfoPropsType) => {


    return (
        <div>
            <div className={s.content}><img alt=''
                                            src='https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1'/>
            </div>
            <div className={s.avatar}><img alt=''
                                           src={profile!== null ? profile.photos.large : 'https://www.domashniy-comfort.ru/images/stories/picture/00000korgi/korg_007.jpg'}/>
            </div>
        </div>
    )
}


//'https://www.domashniy-comfort.ru/images/stories/picture/00000korgi/korg_007.jpg'