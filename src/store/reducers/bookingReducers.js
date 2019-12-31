const initState = {
    //-------- BOOKING MODAL --------
    currentBooking: null,
    //-------- BOOKING CART --------
    cartToggle: false,
    cart: []
}

class BookingItem {
    constructor(id, name, type, price, imgBaseUrl, img) {
        this.id = id
        this.name = name
        this.type = type
        this.price = price
        this.imgBaseUrl = imgBaseUrl
        this.img = img
    }
    addServices() {
        let servicesTotal = 0
        for(let i = 0; action.payload.filter(Boolean).length; i++) {
            servicesTotal += 10
        }
        return this.price + servicesTotal
    }
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
            let booking = {
                id: state.currentBooking.id,
                name: state.currentBooking.name,
                type: state.currentBooking.type,
                set price() {
                    
                }
            }
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