import React from "react";
import s from './Post.module.css'


type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props:PostPropsType) => {
    return (
                <div className={s.item}>
                    <img src='https://rest-zone.ru/upload/photos/2021/06/xcQCiGQojtScNKgat12Y_19_d0eaca25634315cbb8a3fe67202fb106_avatar_full.jpg'/>
                    {props.message}
                    <div>
                        like {props.likesCount}
                    </div>
                </div>
    )
}