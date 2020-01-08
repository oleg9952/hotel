import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAuthForms } from '../../store/actions/authActions'
import style from './Auth.module.css'

const AuthForm = () => {
    const dispatch = useDispatch()
    const { authForms } = useSelector(state => state.authReducers)

    //----- FORM TOGGLERS -----
    const [ formToggle, setFormToggle ] = useState(true)

    const handleLogInTab = () => setFormToggle(true)
    const handleSignUpTab = () => setFormToggle(false)

    const handleFormClose = () => {
        dispatch(toggleAuthForms())
        handleLogInTab()
    }

    return (
        <div className={`${style.auth} ${authForms ? style.active : ''}`}>
            <div className={style.auth_close} onClick={handleFormClose}>
                <div></div>
                <div></div>
            </div>
            <div className={`${style.auth_holder}`}>
                <div className={`${style.profile_img} ${!formToggle ? style.active : ''}`}>

                </div>
                <div className={style.auth_tabs}>
                    <p className={`${style.tab_item} ${formToggle ? style.active : ''}`}
                        onClick={handleLogInTab}
                    >Login</p>
                    <p className={`${style.tab_item} ${!formToggle ? style.active : ''}`}
                        onClick={handleSignUpTab}
                    >Sign Up</p>
                </div>
                <div className={`${style.forms_holder} ${!formToggle ? style.active : ''}`}>
                    <form className={`${style.auth_login} ${formToggle ? style.active : ''}`}>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Email</p>
                            <input type="email" />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Password</p>
                            <input type="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>

                    <form className={`${style.auth_signup} ${!formToggle ? style.active : ''}`}>
                        <div className={style.input_item}>
                            <p className={style.field_title}>First Name</p>
                            <input type="text" />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Last Name</p>
                            <input type="text" />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Location</p>
                            <input type="text" />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Email</p>
                            <input type="email" />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Password</p>
                            <input type="password" />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AuthForm
