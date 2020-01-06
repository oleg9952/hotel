const initState = {
    // intro: false,
    mobileNav: false
}

export default (state = initState, action) => {
    switch(action.type) {
        // case 'ANIMATE_INTRO':
        //     return {
        //         ...state,
        //         intro: true
        //     }
        case 'TOGGLE_MOBILE_NAV':
            return {
                ...state,
                mobileNav: !state.mobileNav
            }
        default:
            return state
    }
}