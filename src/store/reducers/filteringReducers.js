const initState = {
    data: null,
    filtered: false,
    currentFilter: null
}

export default (state = initState, action) => {
    switch(action.payload) {
        case 'APPLY_FILTER':



            return {
                data: []
            }
        case 'RESET_FILTER':
            return {
                data: null,
                filtered: false,
                currentFilter: null
            }
        default:
            return state
    }
}