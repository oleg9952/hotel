const initState = {
    reviews: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_REVIEWS':
            return {
                reviews: action.payload
            }
        default:
            return state
    }
}