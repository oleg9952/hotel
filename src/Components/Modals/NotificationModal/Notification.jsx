import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fireNotification, setAuthError } from '../../../store/actions/authActions'
import styles from './Notification.module.css'

const Notification = () => {
    const dispatch = useDispatch()

    //----- sorces of notifications -----
    const { authError, notifType, user, userEmail } = useSelector(state => state.authReducers)

    const signInSignOutEvents = () => {
        let color
        let message
        let icon
        
        const check = (<i className="fas fa-check"></i>)
        const exit = (<i className="fas fa-door-open"></i>)
        const error = (<i className="fas fa-exclamation-triangle"></i>)

        if(notifType === 'signIn' && authError === null) {
            color = '#38c3ff'
            message = `Welcome back ${userEmail}!`
            icon = check
        } else if(notifType === 'signUp' && authError === null) {
            color = '#38c3ff'
            message = `Thank you for joining us ${userEmail}!`
            icon = check
        } else if(notifType === 'signOut' && authError === null) {
            color = '#15e1c2'
            message = 'Goodbye!'
            icon = exit
        } else if(notifType === 'book' && authError === null) {
            color = '#38c3ff'
            message = 'Thank you for your reservation!'
            icon = check
        } else if(notifType === 'emptyField' && authError === null) {
            color = '#15e1c2'
            message = `Make sure you've filled in all the fields!`
            icon = 'i'
        } else if(notifType && authError) {
            color = 'red'
            message = authError.message
            icon = error
        }

        return {
            colors: { backgroundColor: color },
            message,
            icon
        }
    }

    const closeNotification = ms => {
        setTimeout(() => {
            dispatch(fireNotification(null))
            dispatch(setAuthError(null))
        }, ms)
    }

    useEffect(() => {
        closeNotification(6100)
    }, [])

    return (
        <div className={styles.notification}
            style={signInSignOutEvents().colors}
        >
            <div className={styles.icon}>
                { signInSignOutEvents().icon }
            </div>
            <p>
                { signInSignOutEvents().message }
            </p>
        </div>
    )
}

export default Notification
