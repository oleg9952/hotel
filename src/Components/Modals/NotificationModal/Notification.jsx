import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fireNotification } from '../../../store/actions/notificationActions'
import { fireNotification } from '../../../store/actions/authActions'
import styles from './Notification.module.css'

const Notification = () => {
    const dispatch = useDispatch()

    //----- sorces of notifications -----
    // const { notifType } = useSelector(state => state.notificationReducers)
    const { authError, user, notifType } = useSelector(state => state.authReducers)


    const signInSignOutEvents = () => {
        let color
        let message
        let icon
        
        const check = (<i className="fas fa-check"></i>)
        const exit = (<i className="fas fa-door-open"></i>)

        switch(notifType) {
            case 'signIn':
                color = '#38c3ff'
                message = 'Welcome!'
                icon = check
                break
            case 'signUp':
                color = '#38c3ff'
                message = 'Thank you for joining us!'
                icon = check
                break
            case 'signOut':
                color = '#15e1c2'
                message = 'Goodbye!'
                icon = exit
                break
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
        }, ms)
    }

    useEffect(() => {
        closeNotification(4100)
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
