const initState = {
    authForms: false,
    authorized: false,
    user: null,
    //-------- ERRORS --------
    authError: null
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
            console.log(action.payload)
            return {
                ...state,
                authError: action.payload
            }
        default:
            return state
    }
}