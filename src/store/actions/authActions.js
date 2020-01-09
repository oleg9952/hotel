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
        })
        .catch(error => {
            dispatch({
                type: 'AUTH_ERRORS',
                payload: error
            })
        })
}

//-------- SIGN IN --------

export const signIn = data => dispatch => {
    auth.signInWithEmailAndPassword(data.email, data.password)
        .catch(error => {
            dispatch({
                type: 'AUTH_ERRORS',
                payload: error
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
        })
        .catch(error => console.error(error))
}