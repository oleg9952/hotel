const initState = {
    authForms: false,
    authorized: false,
    user: null,
    //-------- ERRORS --------
    authError: null,
    //----- NOTIFICATION -----
    notifType: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_FORMS':
            return {
                ...state,
                authForms: !state.authForms
            }
        case 'SET_USER':
            return {
                ...state,
                authForms: false,
                authorized: true,
                authError: null,
                user: action.payload
            }
        case 'CLEAR_USER':
            return {
                ...state,
                authorized: false,
                user: null
            }
        //-------- ERRORS --------
        case 'AUTH_ERRORS':
            return {
                ...state,
                authError: action.payload
            }
        //-------- NOTIFICATION --------
        case 'FIRE_NOTIFICATION':
            console.log(action.payload)
            return {
                ...state,
                notifType: action.payload
            }
        default:
            return state
    }
}