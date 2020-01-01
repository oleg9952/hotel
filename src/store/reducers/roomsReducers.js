const initState = {
    rooms: [],
    currentPage: 1,
    roomsPerPage: 12,
    // ------- SORTING -------
    sortAscending: false,
    sortDescending: false
}

const sortAscending = selector => {
    return (a, b) => {
        if (a[selector] < b[selector]) {
          return -1;
        }
        if (a[selector] > b[selector]) {
          return 1;
        }
        return 0;
    }
}

const sortDescending = selector => {
    return (a, b) => {
        if (a[selector] > b[selector]) {
          return -1;
        }
        if (a[selector] < b[selector]) {
          return 1;
        }
        return 0;
    }
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
        // ------- SORTING -------
        case 'PRICE_ASCENDING':
            return {
                ...state,
                sortAscending: true,
                sortDescending: false,
                rooms: state.rooms.sort(sortAscending('price'))
            }
        case 'PRICE_DESCENDING':
            return {
                ...state,
                sortAscending: false,
                sortDescending: true,
                rooms: state.rooms.sort(sortDescending('price'))
            }
        default:
            return state
    }
}