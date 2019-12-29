const initState = {
    currentBooking: null,
    cartToggle: false
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
        case 'TOGGLE_CART':
            return {
                ...state,
                cartToggle: !state.cartToggle
            }
        default:
            return state
    }
}