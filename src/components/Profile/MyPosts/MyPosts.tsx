import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='Hi! How yre you?' likesCount = {15}/>
                <Post message="This is my first post"  likesCount={20}/>
            </div>
        </div>
    )
}