import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://ka-ap.ru/wp-content/uploads/2/8/7/2877035e1201949672428ccdf6b237f6.jpeg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}