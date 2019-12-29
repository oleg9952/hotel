// const roomsData = import('../../mock/rooms.json')
import roomsData from '../../mock/rooms.json'

// export const fetchRooms = () => dispatch => {
//     roomsData.then(data => dispatch({
//         type: 'FETCH_ROOMS',
//         payload: data.default
//     }))
// }

export const fetchRooms = () => {
    return {
        type: 'FETCH_ROOMS',
        payload: roomsData
    }
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