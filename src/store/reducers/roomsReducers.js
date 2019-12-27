const initState = {
    rooms: [],
    currentPage: 1,
    roomsPerPage: 12
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return {
                ...state,
                rooms: action.payload
            }
        case 'SWITCH_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SWITCH_NEXT':
            return {
                ...state,
                currentPage: state.currentPage !== action.payload ? state.currentPage + 1 : action.payload
            }
        case 'SWITCH_PREV':
            return {
                ...state,
                currentPage: state.currentPage !== 1 ? state.currentPage - 1 : 1
            }
        default:
            return state
    }
}