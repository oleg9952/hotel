import { firestore } from '../../fb_config'
import roomsData from '../../mock/rooms.json'

export const fetchRooms = () => dispatch => {

    firestore.collection('bookings')
        .get()
        .then(resp => {
            let data = []
            let reserved = []
            
            resp.forEach(room => reserved.push(room.data().id))
            
            roomsData.forEach(room => {
                if(reserved.indexOf(room.id) === -1) {
                    data.push({
                        ...room,
                        reserved: false
                    })
                } else {
                    data.push({
                        ...room,
                        reserved: true
                    })
                }
            })

            dispatch({
                type: 'FETCH_ROOMS',
                payload: data
            })
        })
        .catch(error => console.log(error))
}

export const switchPage = page => {
    return {
        type: 'SWITCH_PAGE',
        payload: page
    }
}

export const switchNextPage = page => {
    return {
        type: 'SWITCH_NEXT',
        payload: page
    }
}

export const switchPrevPage = () => {
    return {
        type: 'SWITCH_PREV'    
    }
}

// ------- SORTING -------

export const sortPriceUp = () => {
    return {
        type: 'PRICE_ASCENDING'
    }
}

export const sortPriceDown = () => {
    return {
        type: 'PRICE_DESCENDING'
    }
}

// ------- FILTERING -------
export const applyFilter = filterBy => {
    return {
        type: 'APPLY_FILTER',
        payload: filterBy
    }
}

export const resetFilter = () => {
    return {
        type: 'RESET_FILTER'
    }
}