import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCreds } from '../../../store/actions/authActions'
import style from './UserInfo.module.css'

const UserInfo = () => {
    const dispatch = useDispatch()

    const {
        firstName,
        lastName,
        location,
        email,
        uid,
        profileImg
    } = useSelector(state => state.authReducers.user)

    //------- UPDATE CREDS -------
    let userFirstName = useRef(null)
    let userLastName = useRef(null)
    let userEmail = useRef(null)
    let userLocation = useRef(null)

    const handleSublit = e => {
        e.preventDefault()
        
        dispatch(updateCreds(
            {
                newCreds: {
                    firstName: userFirstName.current.value,
                    lastName: userLastName.current.value,
                    location: userLocation.current.value,
                    newEmail: userEmail.current.value  
                },
                currentCreds: {
                    firstName,
                    lastName,
                    location,
                    email
                },
                uid: uid,
                img: profileImg
            }
        ))

        setTimeout(() => {
            [
                userFirstName,
                userLastName,
                userEmail,
                userLocation
            ].forEach(input => input.current.value = null)
        })
    }

    return (
        <form className={style.info} onSubmit={handleSublit}>
            <div className={style.info_header}>
                <div className={style.profile_img} 
                    style={{ backgroundImage: `url(${profileImg})` }}
                />
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
                        ref={userFirstName}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Last name</p>
                    <input type="text"
                        placeholder={lastName}
                        ref={userLastName}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Email</p>
                    <input type="email"
                        name="email"
                        placeholder={email}
                        ref={userEmail}
                    />
                </div>
                <div className={style.body_item}>
                    <p>Location</p>
                    <input type="text"
                        placeholder={location}
                        ref={userLocation}
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