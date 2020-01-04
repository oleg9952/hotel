import data from '../../mock/rooms.json'

const initState = {
    rooms: [...data],
    searchResults: null,
    search: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'SEARCH':
            let results = []
            let animDelay = 0
            if(action.payload.length !== 0) {
                state.rooms.forEach(item => {
                    if(item.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1) {
                        animDelay += 50
                        results.push({
                            ...item,
                            animDelay: animDelay
                        })
                    }
                })
                return {
                    ...state,
                    searchResults: results
                }
            } else {
                results = []
                return{
                    ...state,
                    searchResults: null
                }
            }
            
        case 'TOGGLE_SEARCH':
            return {
                ...state,
                search: !state.search
            }
        default:
            return state
    }
}