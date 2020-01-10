import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAuthForms, signUp, signIn } from '../../store/actions/authActions'
import style from './Auth.module.css'
import Spinner from '../Spinner/Spinner'

const AuthForm = () => {
    const dispatch = useDispatch()
    const { authForms } = useSelector(state => state.authReducers)

    // const [ useSpinner, setUseSpinner ] = useState(false)

    //----- FORM TOGGLERS -----
    const [ formToggle, setFormToggle ] = useState(true)

    const handleLogInTab = () => setFormToggle(true)
    const handleSignUpTab = () => setFormToggle(false)

    const handleFormClose = () => {
        dispatch(toggleAuthForms())
        handleLogInTab()
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
                password: newUserPass.current.value
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
            alert('Make sure you\'ve filled in all fields!')
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
            alert('Make sure you\'ve filled in all fields!')
        }
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
                    <form className={`${style.auth_login} ${formToggle ? style.active : ''}`}
                        onSubmit={handleSignIn}
                    >
                        <div className={style.input_item}>
                            <p className={style.field_title}>Email</p>
                            <input type="email" ref={userEmail} />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Password</p>
                            <input type="password" ref={userPass} />
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
                            <input type="email" ref={newUserEmail} />
                        </div>
                        <div className={style.input_item}>
                            <p className={style.field_title}>Password</p>
                            <input type="password" ref={newUserPass} />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>


                    

                </div>
            </div>
        </div>
    )
}

export default AuthForm
