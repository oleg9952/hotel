import data from '../../mock/rooms.json'

const initState = {
    rooms: [...data],
    search: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'SEARCH':
            console.log('searching...')
            return state
        case 'TOGGLE_SEARCH':
            console.log(1)
            return {
                ...state,
                search: !state.search
            }
        default:
            return state
    }
}