import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/img/i.webp'


export class UsersC extends React.Component<UsersPropsType, UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
            console.log(response)
        })
    }

    onPageChanged = (pageNumber:number)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log(response)
        })
    }

    render() {
        let pagesCounter = Math.ceil(this.props.usersPage.totalUserCount / this.props.usersPage.pageSize)
        let pages = []
        for (let i=1 ; i<=pagesCounter;i++) {
            pages.push(i)
        }
        console.log(pages)
        return (
            <div>
                <div>
                    {pages.map(p=>{
                        return <span key={p}
                                     onClick={()=>{this.onPageChanged(p)}}
                                     style={{fontWeight: this.props.usersPage.currentPage===p ? 'bold': 'normal', cursor: 'pointer'}}>{p} </span>
                    })}
                </div>
                {/*<button onClick={this.getUsers}>users</button>*/}
                {this.props.usersPage.users.map(u => {
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
                                            ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
                                        {/*<div style={{alignSelf:'self-end'}}>{'u.location.city'}</div>*/}
                                        {/*<div style={{alignSelf:'self-end'}}>{'u.location.country'}</div>*/}

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
    }
}

