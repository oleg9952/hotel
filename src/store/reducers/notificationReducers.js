const initState = {
    notifType: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'FIRE_NOTIFICATION':
            return {
                notifType: action.payload
            }
        default:
            return state
    }
}