const initState = {
    //-------- BOOKING MODAL --------
    currentBooking: null,
    //-------- BOOKING CART --------
    cartToggle: false,
    cart: []
}

export default (state = initState, action) => {
    switch(action.type) {
        //-------- BOOKING MODAL --------
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
        //-------- BOOKING CART --------
        case 'TOGGLE_CART':
            return {
                ...state,
                cartToggle: !state.cartToggle
            }
        case 'ADD_TO_CART':
            console.log('added')
            return {
                ...state,
                cart: [...state.cart, state.currentBooking],
                currentBooking: null
            }
        case 'REMOVE_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}