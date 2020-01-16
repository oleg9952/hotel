import { auth, firestore } from '../../fb_config'

export const toggleAuthForms = () => {
    return {
        type: 'TOGGLE_FORMS'
    }
}

//-------- AUTH --------

export const fetchUserAuthData = data => dispatch => {
    firestore.collection('users').doc(`${data.uid}`)
        .get()
        .then(resp => {
            let currentUser = {
                ...resp.data(),
                uid: data.uid,
                email: data.email
            }
            dispatch({
                type: 'SET_USER',
                payload: currentUser
            })
        })
        .catch(error => console.error(error))
}

export const setAuthError = arg => {
    return {
        type: 'AUTH_ERRORS',
        payload: arg
    }
}

//-------- SIGN UP --------

export const signUp = data => dispatch => {
    auth.createUserWithEmailAndPassword(data.email, data.password)
        .then(resp => {
            firestore.collection('users').doc(`${resp.user.uid}`)
                .set({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    location: data.location
                })
                .catch(error => console.error(error))
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'signUp',
                userEmail: resp.user.email
            })
        })
        .catch(error => {
            dispatch({
                type: 'AUTH_ERRORS',
                payload: error
            })
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'signUp'
            })
        })
}

//-------- SIGN IN --------

export const signIn = data => dispatch => {
    auth.signInWithEmailAndPassword(data.email, data.password)
        .then(resp => {
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'signIn',
                userEmail: resp.user.email
            })
        })
        .catch(error => {
            dispatch({
                type: 'AUTH_ERRORS',
                payload: error
            })
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'signIn'
            })
        })
}

//-------- SIGN OUT --------

export const signOut = () => dispatch => {
    auth.signOut()
        .then(() => {
            dispatch({
                type: 'CLEAR_USER'
            })
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'signOut'
            })
        })
        .catch(error => console.error(error))
}

//-------- UPDATE CREDENTIALS --------

export const updateCreds = creds => dispatch => {
    const {
        newEmail,
        ...newDetails
    } = creds.newCreds

    const {
        email,
        ...currentDetails
    } = creds.currentCreds

    const update = {
        firstName: newDetails.firstName.length !== 0 ? newDetails.firstName : currentDetails.firstName,
        lastName: newDetails.lastName.length !== 0 ? newDetails.lastName : currentDetails.lastName,
        location: newDetails.location.length !== 0 ? newDetails.location : currentDetails.location
    }

    firestore.collection('users').doc(`${creds.uid}`)
        .set(update)
        .catch(error => console.error(error))

    if(newEmail.length !== 0) {
        auth.currentUser.updateEmail(`${newEmail}`)
            .then(() => {
                dispatch({
                    type: 'FIRE_NOTIFICATION',
                    payload: 'updateEmail'
                })
            })
            .catch(error => {
                dispatch({
                    type: 'AUTH_ERRORS',
                    payload: error
                })
                dispatch({
                    type: 'FIRE_NOTIFICATION',
                    payload: 'updateEmail'
                })
            })
    }
}

//-------- NOTIFICATIONS --------

export const fireNotification = event => {
    return {
        type: 'FIRE_NOTIFICATION',
        payload: event
    }
}