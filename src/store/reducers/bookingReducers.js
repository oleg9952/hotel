const initState = {
    //-------- BOOKING MODAL --------
    currentBooking: null,
    //-------- BOOKING CART --------
    cart: [],
    bookingHistory: null,
    cartToggle: false
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

                // ------ checkIn / checkOut Dates ------ 
                let checkIn = action.payload[2][0]
                let checkOut = action.payload[2][1]

                let checkInDay = checkIn.getDate() < 10 ? `0${checkIn.getDate()}` : checkIn.getDate()
                let checkInMonth = checkIn.getMonth() < 10 ? `0${checkIn.getMonth() + 1}` : checkIn.getMonth() + 1

                let checkOutDay = checkOut.getDate() < 10 ? `0${checkOut.getDate()}` : checkOut.getDate()
                let checkOutMonth = checkOut.getMonth() < 10 ? `0${checkOut.getMonth() + 1}` : checkOut.getMonth() + 1

                // ------ BOOKING DURATION ------ 

                const calcBookingDuration = (checkIn, checkOut) => {
                    const oneDay = 1000 * 60 * 60 * 24

                    let checkInMs = checkIn.getTime()
                    let checkOutMs = checkOut.getTime()

                    let differenceMs = Math.abs(checkInMs - checkOutMs)

                    return Math.round(differenceMs / oneDay)
                }

                // ------ BOOKING ITEM ------ 

                let bookingItem = {
                    ...state.currentBooking,
                    price: (state.currentBooking.price * calcBookingDuration(checkIn, checkOut)) + servicesTotal,
                    guests: action.payload[1],
                    bookingDates: {
                        checkIn: `${checkInDay}.${checkInMonth}.${checkIn.getFullYear()}`,
                        checkOut: `${checkOutDay}.${checkOutMonth}.${checkOut.getFullYear()}`
                    },
                    services: {
                        food: action.payload[0][0],
                        pool: action.payload[0][1],
                        gym: action.payload[0][2]
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
        case 'RESET_CART':
            return {
                ...state,
                cart: [],
                cartToggle: false
            }

        //-------- FIRESTORE --------

        case 'FETCH_HISTORY':
            class Reservation {
                constructor(
                    bookingID,
                    bookingDate,
                    totalPrice,
                    bookings
                ) {
                    this.bookingID = bookingID;
                    this.bookingDate = bookingDate;
                    this.totalPrice = totalPrice
                    this.bookings = [...bookings]
                }
            }

            let history = []
            action.payload.refs.forEach(ref => {
                if(ref.uid == action.payload.currentUser) {
                    let bookingItems = []
                    action.payload.bookings.forEach(booking => {
                        if(booking.bookingID === ref.bookingID) {
                            bookingItems.push(booking)
                        }
                    })
                    history.push(new Reservation(
                        ref.bookingID,
                        ref.bookingDate,
                        ref.total,
                        bookingItems
                    ))
                }
            })
 
            return {
                ...state,
                bookingHistory: history
            }
        default:
            return state
    }
}