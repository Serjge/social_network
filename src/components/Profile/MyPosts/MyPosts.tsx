import React, {ChangeEvent, useState} from 'react'
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../Redux/State";

type MyPostsPropsType = {
    profileDate: ProfilePageType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (postText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    console.log('render myPost')
    let [error, setError] = useState<string>('')
    let [postsData, setPostsData] = useState<PostsType[]>(props.profileDate.posts) // разделение приходимых данных в хранилище
    let [disableButton, setDisableButton] = useState(true) // деланье кнопки

    const removePost = (id: string) => {
        setPostsData(postsData.filter(p => p.id !== id))
    }

    const postElements = postsData.map(p => {

        const likeAdd = (id: string, isDone: boolean) => {
            const posts = postsData.find(p => p.id === id)
            if (posts) {
                posts.isDone = isDone
                if (isDone === true) {
                    posts.likeCount += 1
                } else {
                    posts.likeCount -= 1
                }
                setPostsData([...postsData])
            }
        }

        return (
            <Post
                message={p.message}
                likeCount={p.likeCount}
                removePost={removePost}
                id={p.id}
                isDone={p.isDone}
                likeAdd={likeAdd}
            />
        )
    })

    const addPost = () => {

        if (props.profileDate.messageForNewPost.trim() !== '') {
            props.addPostCallback(props.profileDate.messageForNewPost)
            props.changeNewTextCallback( '')
            setDisableButton(true)
            console.log(postsData)
        } else {
            setError(' поле должно быть заполнено')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
            setDisableButton(true)
        } else {
            setDisableButton(false)
            props.changeNewTextCallback(e.currentTarget.value)
            setError('')
        }
    }

    return (
        <div>
            <div>
                <textarea value={props.profileDate.messageForNewPost} onChange={onChangeHandler} ></textarea><span>{error}</span>
            </div>
            <div>
                <button disabled={disableButton} onClick={addPost}>Add post</button>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}
