import { combineReducers } from 'redux'
import navReducers from './navReducers'
import roomsReducers from './roomsReducers'

export default combineReducers({
    navReducers,
    roomsReducers
})