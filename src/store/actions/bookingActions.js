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

export const confirmBooking = () => {
    return {
        type: 'CONFIRM_BOOKING'
    }
}