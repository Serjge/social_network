import React from 'react'
import c from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div className={c.content}>
            <div><img alt=''
                      src='https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1'/>
            </div>
            <div className={c.avatar}><img alt=''
                                           src='https://www.domashniy-comfort.ru/images/stories/picture/00000korgi/korg_007.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile