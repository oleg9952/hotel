export const applySearch = input => {
    return {
        type: 'SEARCH',
        payload: input
    }
}

export const toggleSearch = () => {
    return {
        type: 'TOGGLE_SEARCH'
    }
}