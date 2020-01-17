import { auth, firestore, storage } from '../../fb_config'

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
            if(resp.data().picture) {
                storage.ref().child(`profilePictures/${data.uid}.jpg`)
                    .getDownloadURL()
                    .then(url => {
                        let currentUser = {
                            ...resp.data(),
                            uid: data.uid,
                            email: data.email,
                            profileImg: url
                        }
                        dispatch({
                            type: 'SET_USER',
                            payload: currentUser
                        })
                    })
                    .catch(error => {
                        let currentUser = {
                            ...resp.data(),
                            uid: data.uid,
                            email: data.email,
                            profileImg: null
                        }
                        dispatch({
                            type: 'SET_USER',
                            payload: currentUser
                        })
                        console.error(error)
                    })
            } else {
                let currentUser = {
                    ...resp.data(),
                    uid: data.uid,
                    email: data.email,
                    profileImg: null
                }
                dispatch({
                    type: 'SET_USER',
                    payload: currentUser
                })
            }
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
            //----- UPLOAD IMG -----
            if(data.profileImg !== null) {
                storage.ref().child(`profilePictures/${resp.user.uid}.jpg`)
                    .put(data.profileImg)
                    .then(() => {
                        firestore.collection('users').doc(`${resp.user.uid}`)
                            .set({
                                firstName: data.firstName,
                                lastName: data.lastName,
                                location: data.location,
                                picture: data.profileImg ? true : false
                            })
                            .catch(error => console.error(error))
                    })
                    .catch(error => console.error(error))
            } else {
                firestore.collection('users').doc(`${resp.user.uid}`)
                    .set({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        location: data.location,
                        picture: data.profileImg ? true : false
                    })
                    .catch(error => console.error(error))
            }

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
        location: newDetails.location.length !== 0 ? newDetails.location : currentDetails.location,
        picture: creds.img ? true : false
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

//-------- PASSWORD RESET --------

export const resetPassword = email => dispatch => {
    auth.sendPasswordResetEmail(email)
        .then(() => {
            dispatch({
                type: 'TOGGLE_FORMS'
            })
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'passReset'
            })
        })
        .catch(error => {
            dispatch({
                type: 'AUTH_ERRORS',
                payload: error
            })
            dispatch({
                type: 'FIRE_NOTIFICATION',
                payload: 'passReset'
            })
        })
}

//-------- NOTIFICATIONS --------

export const fireNotification = event => {
    return {
        type: 'FIRE_NOTIFICATION',
        payload: event
    }
}