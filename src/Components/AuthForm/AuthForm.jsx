import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAuthForms, signUp, signIn, fireNotification, resetPassword } from '../../store/actions/authActions'
import style from './Auth.module.css'

const AuthForm = () => {
    const dispatch = useDispatch()
    const { authForms } = useSelector(state => state.authReducers)

    //----- FORM TOGGLERS -----
    const [ formToggle, setFormToggle ] = useState(true)
    const [ passwordReset, setPasswordReset ] = useState(false)

    const handleLogInTab = () => setFormToggle(true)
    const handleSignUpTab = () => setFormToggle(false)
    const handlePassResetSwitch = () => setPasswordReset(!passwordReset)

    const handleFormClose = () => {
        dispatch(toggleAuthForms())
        handleLogInTab()
    }

    //----- PROFILE IMG -----
    const [ profileImgPreview, setProfileImgPreview ] = useState(null)
    const [ imgFile, setImgFile ] = useState(null)
    
    const handleProfileImgSet = file => {
        setImgFile(file.target.files[0])
        let reader = new FileReader()
        reader.onload = e => {
            setProfileImgPreview(e.target.result)
        }
        reader.readAsDataURL(file.target.files[0])
    }

    //-------- SIGN UP --------

    let firstName = useRef(null)
    let lastName = useRef(null)
    let location = useRef(null)
    let newUserEmail = useRef(null)
    let newUserPass = useRef(null)

    const handleSignUp = e => {
        e.preventDefault()        
        if(
            firstName.current.value &&
            lastName.current.value &&
            location.current.value &&
            newUserEmail.current.value &&
            newUserPass.current.value
        ) {
            dispatch(signUp({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                location: location.current.value,
                email: newUserEmail.current.value,
                password: newUserPass.current.value,
                profileImg: imgFile
            }))

            setTimeout(() => {
                [
                    firstName,
                    lastName,
                    location,
                    newUserEmail,
                    newUserPass
                ].forEach(input => input.current.value = null)
            }, 500)
        } else {
            dispatch(fireNotification('emptyField'))
        }
    }

    //-------- SIGN IN --------

    let userEmail = useRef(null)
    let userPass = useRef(null)

    const handleSignIn = e => {
        e.preventDefault()

        if(userEmail.current.value && userPass.current.value) {
            let returningUser = {
                email: userEmail.current.value,
                password: userPass.current.value
            }

            dispatch(signIn(returningUser))

            setTimeout(() => {
                [userEmail, userPass].forEach(input => input.current.value = null)
            }, 500)
        } else {
            dispatch(fireNotification('emptyField'))
        }
    }

    //----- PASSWORD RESET -----
    let resetPassEmail = useRef(null)

    const handlePasswordReset = e => {
        e.preventDefault()
        if(resetPassEmail.current.value.length !== 0 || 
            resetPassEmail.current.value === null
        ) {
            dispatch(resetPassword(resetPassEmail.current.value))
            setTimeout(() => setPasswordReset(false), 1000)
        } else {
            dispatch(fireNotification('emptyField'))
        }
        setTimeout(() => resetPassEmail.current.value = null)
    }

    return (
        <div className={`${style.auth} ${authForms ? style.active : ''}`}>
            <div className={style.auth_close} onClick={handleFormClose}>
                <div></div>
                <div></div>
            </div>
            <div className={`${style.auth_holder}`}>
                <div className={`${style.auth_body} ${passwordReset ? style.active : ''}`}>
                    <div className={`${style.profile_img} ${!formToggle ? style.active : ''}`}
                        style={{ backgroundImage: `url(${profileImgPreview})` }}
                    >
                        <input type="file" onChange={handleProfileImgSet} />
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
                        <form className={`${style.auth_login} ${formToggle ? style.active : ''}`}
                            onSubmit={handleSignIn}
                        >
                            <div className={style.input_item}>
                                <p className={style.field_title}>Email</p>
                                <input type="email" name="email" ref={userEmail} />
                            </div>
                            <div className={style.input_item}>
                                <p className={style.field_title}>Password</p>
                                <input type="password" className={style.password_input} ref={userPass} />
                                <p className={style.password_reset} 
                                    onClick={handlePassResetSwitch}
                                >Forgot Password</p>
                            </div>
                            <button type="submit">Login</button>
                        </form>

                        <form className={`${style.auth_signup} ${!formToggle ? style.active : ''}`}
                            onSubmit={handleSignUp}
                        >
                            <div className={style.input_item}>
                                <p className={style.field_title}>First Name</p>
                                <input type="text" ref={firstName} />
                            </div>
                            <div className={style.input_item}>
                                <p className={style.field_title}>Last Name</p>
                                <input type="text" ref={lastName} />
                            </div>
                            <div className={style.input_item}>
                                <p className={style.field_title}>Location</p>
                                <input type="text" ref={location} />
                            </div>
                            <div className={style.input_item}>
                                <p className={style.field_title}>Email</p>
                                <input type="email" name="email" ref={newUserEmail} />
                            </div>
                            <div className={style.input_item}>
                                <p className={style.field_title}>Password</p>
                                <input type="password" ref={newUserPass} />
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div> 
                </div>
                <form className={`${style.auth_reset} ${passwordReset ? style.active : ''}`} onSubmit={handlePasswordReset}>
                    <div className={style.close_reset} onClick={handlePassResetSwitch}>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className={style.reset_title}>Password Reset</h2>
                    <div className={style.input_item}>
                        <div className={style.field_title}>Email</div>
                        <input type="email" name="email" ref={resetPassEmail} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
