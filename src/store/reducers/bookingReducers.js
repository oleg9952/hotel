const initState = {
    currentBooking: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_BOOKING':
            return {
                ...state,
                currentBooking: action.payload
            }
        case 'RESET_BOOKING':
            return {
                ...state,
                currentBooking: null
            }
        default:
            return state
    }
}