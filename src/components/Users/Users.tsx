import React from 'react';
import userPhoto from '../../assets/img/i.webp'
import {InitialUsersStateType} from "../../Redux/UsersReducer";

type UsersPropsType = {
    usersPage:InitialUsersStateType
    onPageChanged: (pageNumber:number) => void
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export const Users = ({usersPage,onPageChanged,follow, unFollow}: UsersPropsType) => {

    let pagesCounter = Math.ceil(usersPage.totalUserCount / usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p=>{
                    return <span key={p}
                                 onClick={()=>{onPageChanged(p)}}
                                 style={{fontWeight: usersPage.currentPage===p ? 'bold': 'normal', cursor: 'pointer'}}>{p} </span>
                })}
            </div>
            {usersPage.users.map(u => {
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
                                    <img style={{width: '100%', height: '100%', borderRadius: '50%'}}
                                         src={u.photos.small === null ? userPhoto : u.photos.small}
                                         alt={u.name}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unFollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => follow(u.id)}>Follow</button>}
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
                <button>Show more</button>
            </div>
        </div>
    );
};

