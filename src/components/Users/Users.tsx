import React from 'react';
import {UsersPropsType} from "./UsersContainer";


export const Users = ({usersPage, follow, unFollow}: UsersPropsType) => {

    return (
        <div>
            {usersPage.users.map(u => {
                    return (
                        <div key={u.id}
                             style={{display: 'flex', justifyContent: 'space-between', width: '500px', padding:'10px'}}>
                            <div>
                                <div style={{width: '80px', height: '80px'}}>
                                    <img style={{width: '100%', height: '100%', borderRadius: '50%'}}
                                         src={u.urlAvatar}
                                         alt={u.name}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unFollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                            <div style={{display:'flex', padding:'10px', border:'1px #fff solid', borderRadius:'5px'}}>
                                <div style={{width: '150px'}}>
                                    <div>{u.name}</div>
                                    <div>{u.age}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div style={{width: '150px',display:'flex',  flexDirection:'column'}}>
                                    <div style={{alignSelf:'self-end'}}>{u.location.city}</div>
                                    <div style={{alignSelf:'self-end'}}>{u.location.country}</div>

                                </div>
                            </div>
                        </div>
                    )
                }
            )}

            {/*{usersPage.users.map(m => m.name)}*/}

            <div style={{display:'flex', justifyContent:'center'}}>
                <button>Show more</button>
            </div>
        </div>
    );
};

