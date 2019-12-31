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
        
            let servicesTotal = 0

            for(let i = 0; i < action.payload[0].filter(Boolean).length; i++) {
                servicesTotal += 10
            }

            let bookingItem = {
                id: state.currentBooking.id,
                name: state.currentBooking.name,
                type: state.currentBooking.type,
                price: state.currentBooking.price + servicesTotal,
                imgBaseUrl: state.currentBooking.imgBaseUrl,
                img: state.currentBooking.img,
                guests: action.payload[1]            
            }

            return {
                ...state,
                cart: [...state.cart, bookingItem],
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