import React from 'react'
import { useSelector } from 'react-redux'
import style from './UserInfo.module.css'

const UserInfo = () => {
    const {
        firstName,
        lastName,
        location,
        email
    } = useSelector(state => state.authReducers.user)

    return (
        <form className={style.info}>
            <div className={style.info_header}>
                <div className={style.profile_img} />
                <div className={style.user_details}>
                    <p className={style.user_name}>
                        { `${firstName} ${lastName}` }
                    </p>
                    <p className={style.user_location}>
                        { location }
                    </p>
                </div>
            </div>
            <div className={style.info_body}>
                <div className={style.body_item}>
                    <p>First name</p>
                    <input type="text"
                        placeholder={firstName}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Last name</p>
                    <input type="text"
                        placeholder={lastName}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Email</p>
                    <input type="email"
                        placeholder={email}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Location</p>
                    <input type="text"
                        placeholder={location}
                    />
                </div>
            </div>
            <button type="submit" className={style.submit_btn}>
                Save changes
            </button>
        </form>
    )
}

export default UserInfo