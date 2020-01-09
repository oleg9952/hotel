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
                authorized: true,
                user: action.payload
            }
        //-------- ERRORS --------
        case 'AUTH_ERRORS':
            console.log('error')
            return {
                ...state,
                authError: action.payload
            }
        default:
            return state
    }
}