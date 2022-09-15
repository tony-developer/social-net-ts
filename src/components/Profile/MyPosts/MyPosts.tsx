import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi! How yre you?', likesCount: 12},
        {id: 2, message: 'This is my first post', likesCount: 11},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}