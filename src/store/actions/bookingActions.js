import { firestore } from '../../fb_config'

//-------- BOOKING MODAL --------

export const setCurrentBooking = room => {
    return {
        type: 'SET_CURRENT_BOOKING',
        payload: room
    }
}

export const resetCurrentBooking = () => {
    return {
        type: 'RESET_BOOKING'
    }
}

export const toggleCart = () => {
    return {
        type: 'TOGGLE_CART'
    }
}

//-------- BOOKING CART --------

export const addToCart = (services, guests, date) => {
    return {
        type: 'ADD_TO_CART',
        payload: [services, guests, date]
    }
}

export const removeCart = id => {
    return {
        type: 'REMOVE_CART',
        payload: id
    }
}

//-------- FIRESTORE --------

export const fetchBookingHistory = currentUser => dispatch => {
    let refs = []
    let bookings = []

    firestore.collection('booking_ref')
        .get()
        .then(resp => {
            resp.docs.forEach(ref => {
                refs.push(ref.data())
            })
        })
        .then(() => {
            firestore.collection('bookings')
                .get()
                .then(resp => {
                    resp.docs.forEach(booking => {
                        bookings.push(booking.data())
                    })
                })
                .then(() => {
                    dispatch({
                        type: 'FETCH_HISTORY',
                        payload: { refs, bookings, currentUser }
                    })
                })
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

export const confirmBooking = (booking, cart) => dispatch => {
    const { uid, bookingID, total } = booking

    firestore.collection('booking_ref')
        .add({
            uid, 
            bookingID, 
            total,
            bookingDate: new Date().getTime()
        })
        .then(() => {
            cart.forEach(bookingItem => {
                const {
                    bookingDates,
                    services,
                    ...filtered
                } = bookingItem
        
                firestore.collection('bookings')
                .add({
                    ...filtered,
                    checkIn: bookingItem.bookingDates.checkIn,
                    checkOut: bookingItem.bookingDates.checkOut,
                    food: bookingItem.services.food,
                    pool: bookingItem.services.pool,
                    gym: bookingItem.services.gym,
                    bookingID
                })
                .catch(error => console.error(error))
            })

        })
        .then(() => dispatch({
            type: 'RESET_CART'
        }))
        .catch(error => console.error(error))
}

export const resetHistory = () => {
    return {
        type: 'RESET_HISTORY'
    }
}