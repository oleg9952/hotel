import React from 'react'
import style from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <form className={style.info}>
            <div className={style.info_header}>
                <div className={style.profile_img} />
                <div className={style.user_details}>
                    <p className={style.user_name}>Alex Brand</p>
                    <p className={style.user_location}> New Yourk, USA</p>
                </div>
            </div>
            <div className={style.info_body}>
                <div className={style.body_item}>
                    <p>First name</p>
                    <input type="text"
                        placeholder="Alex"
                    />
                </div>
                <div className={style.body_item}>
                    <p>Last name</p>
                    <input type="text"
                        placeholder="Brand"
                    />
                </div>
                <div className={style.body_item}>
                    <p>Email</p>
                    <input type="email"
                        placeholder="alex.brand@gmail.com"
                    />
                </div>
                <div className={style.body_item}>
                    <p>Location</p>
                    <input type="text"
                        placeholder="New Yourk, USA"
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