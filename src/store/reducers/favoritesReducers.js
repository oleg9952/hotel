const initState = {
    favorites: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_FAVORITES':
            return {
                favorites: action.payload
            }
        default:
            return state
    }
}