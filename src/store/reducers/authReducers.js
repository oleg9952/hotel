const initState = {
    authForms: false,
    authorized: false,
    user: {
        email: 'alex.brand@gmail.com',
        uid: 'uriuyewh278yqwe',
        firstName: 'Alex',
        lastName: 'Brand',
        location: 'USA',
        profileImg: 'link',
        bookingHistory: [],
        favorite: []
    }
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_FORMS':
            return {
                ...state,
                authForms: !state.authForms
            }
        default:
            return state
    }
}