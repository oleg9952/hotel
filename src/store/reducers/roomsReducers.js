const initState = {
    rooms: [],
    currentPage: 1,
    roomsPerPage: 9,
    // ------- SORTING -------
    sortAscending: false,
    sortDescending: false,
    // ------- FILTERING -------
    data: null,
    filtered: false,
    currentFilter: null
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
        // ------- FILTERING -------
        case 'APPLY_FILTER':
            let store = []
            let target = action.payload.toLowerCase()
            if(target === 'single') {
                state.rooms.filter(room => {
                    if(room.type === 'Single') {
                        store.push(room)
                    }
                })
            } else if(target === 'double') {
                state.rooms.filter(room => {
                    if(room.type === 'Double') {
                        store.push(room)
                    }
                })
            } else if(target === 'triple') {
                state.rooms.filter(room => {
                    if(room.type === 'Triple') {
                        store.push(room)
                    }
                })
            } else if(target === 'quad') {
                state.rooms.filter(room => {
                    if(room.type === 'Quad') {
                        store.push(room)
                    }
                })
            } else if(target === 'queen') {
                state.rooms.filter(room => {
                    if(room.type === 'Queen') {
                        store.push(room)
                    }
                })
            }
            return {
                ...state,
                data: store,
                filtered: true,
                currentFilter: target
            }
        case 'RESET_FILTER':
            return {
                ...state,
                data: null,
                filtered: false,
                currentFilter: null
            }
        default:
            return state
    }
}