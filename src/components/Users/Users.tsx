import React from 'react';
import userPhoto from '../../assets/img/i.webp'
import {UserType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    follow: (id: string) => void
    unFollow: (id: string) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
}

export const Users = ({
                          onPageChanged,
                          follow,
                          unFollow,
                          pageSize,
                          totalUserCount,
                          currentPage,
                          users
                      }: UsersPropsType) => {

    let pagesCounter = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i)
    }
    return (
        <div>

            {users.map(u => {
                    return (
                        <div key={u.id}
                             style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '500px',
                                 padding: '10px'
                             }}>

                            <div>
                                <div style={{width: '80px', height: '80px'}}>

                                    <NavLink to={'/profile/' + u.id}>
                                        <img style={{width: '100%', height: '100%', borderRadius: '50%'}}
                                             src={u.photos.small === null ? userPhoto : u.photos.small}
                                             alt={u.name}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                                                headers:     {
                                                    "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unFollow(u.id)
                                                }

                                            })
                                            // unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                                withCredentials: true,
                                                baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                                                headers:     {
                                                    "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    follow(u.id)
                                                }
                                            })
                                            // follow(u.id)
                                        }}>Follow</button>}
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                border: '1px #fff solid',
                                borderRadius: '5px'
                            }}>
                                <div style={{width: '150px'}}>
                                    <div>{u.name}</div>
                                    <div>{u.age}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div style={{width: '150px', display: 'flex', flexDirection: 'column'}}>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            <div>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}
                                 style={{
                                     fontWeight: currentPage === p ? 'bold' : 'normal',
                                     cursor: 'pointer'
                                 }}>{p} </span>
                })}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button>Show more</button>
            </div>
        </div>
    );
};

