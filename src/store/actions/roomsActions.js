const roomsData = import('../../mock/rooms.json')

export const fetchRooms = () => dispatch => {
    roomsData.then(data => dispatch({
        type: 'FETCH_ROOMS',
        payload: data.default
    }))
}