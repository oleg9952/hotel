const roomsData = import('../../mock/rooms.json')

export const fetchRooms = () => dispatch => {
    roomsData.then(data => dispatch({
        type: 'FETCH_ROOMS',
        payload: data.default
    }))
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