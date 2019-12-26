const initState = {
    rooms: []
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return {
                ...state,
                rooms: action.payload
            }
        default:
            return state
    }
}