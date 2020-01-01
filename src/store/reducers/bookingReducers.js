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

            if(action.payload[2] !== null) {
                let checkIn = action.payload[2][0]
                let checkOut = action.payload[2][1]

                let checkInDay = checkIn.getDate() < 10 ? `0${checkIn.getDate()}` : checkIn.getDate()
                let checkInMonth = checkIn.getMonth() < 10 ? `0${checkIn.getMonth() + 1}` : checkIn.getMonth() + 1

                let checkOutDay = checkOut.getDate() < 10 ? `0${checkOut.getDate()}` : checkOut.getDate()
                let checkOutMonth = checkOut.getMonth() < 10 ? `0${checkOut.getMonth() + 1}` : checkOut.getMonth() + 1

                let bookingItem = {
                    id: state.currentBooking.id,
                    name: state.currentBooking.name,
                    type: state.currentBooking.type,
                    price: state.currentBooking.price + servicesTotal,
                    imgBaseUrl: state.currentBooking.imgBaseUrl,
                    img: state.currentBooking.img,
                    guests: action.payload[1],
                    bookingDates: {
                        checkIn: `${checkInDay}.${checkInMonth}.${checkIn.getFullYear()}`,
                        checkOut: `${checkOutDay}.${checkOutMonth}.${checkOut.getFullYear()}`
                    }         
                }

                return {
                    ...state,
                    cart: [...state.cart, bookingItem],
                    currentBooking: null
                }
            } else {
                alert('You forgot to choose booking dates!')
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