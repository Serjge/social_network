import React from 'react';
import userPhoto from 'assets/img/defaultUsersAvatar.webp'
import {UserType} from "store/reducers/UsersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    followingInProgress: number[]
    toggleFollowingInProgress: (isFollow: boolean, userId: number) => void
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export const Users = ({
                          onPageChanged,
                          pageSize,
                          totalUserCount,
                          currentPage,
                          users,
                          followingInProgress,
                          follow,
                          unFollow,
                      }: UsersPropsType) => {

    let pagesCounter = Math.ceil(totalUserCount / pageSize)
    let pages = []

    if (currentPage < 7) {
        for (let i = 1; i <= currentPage + 5; i++) {
            pages.push(i)
        }
        pages.push(pagesCounter)
    } else if (currentPage + 5 >= pagesCounter) {
        pages.push(1)
        for (let i = currentPage - 5; i <= pagesCounter; i++) {
            pages.push(i)
        }
    } else {
        pages.push(1)
        for (let i = currentPage - 5; i <= currentPage + 5; i++) {
            pages.push(i)
        }
        pages.push(pagesCounter)
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
                                        ? <button
                                            disabled={followingInProgress.some(id => id === +u.id)}
                                            onClick={() => unFollow(u.id)}>
                                            Unfollow
                                        </button>
                                        : <button disabled={followingInProgress.some(id => id === +u.id)}
                                                  onClick={() => follow(u.id)}>
                                            Follow
                                        </button>}
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
            <div style={{display: 'flex', justifyContent: 'center'}}>

                {pages.map(p => {
                    return (
                        <span key={p}
                              onClick={() => {
                                  onPageChanged(p)
                              }}
                              style={{
                                  fontWeight: currentPage === p ? 'bold' : 'normal',
                                  color: currentPage === p ? 'darkred' : '',
                                  cursor: 'pointer',
                                  padding: '5px'
                              }}>{p} </span>
                    )
                })}
            </div>
        </div>
    );
};

