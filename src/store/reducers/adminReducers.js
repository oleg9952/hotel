const initState = {
    adminPage: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_ADMIN':
            return {
                adminPage: !state.adminPage
            }
        default:
            return state
    }
}