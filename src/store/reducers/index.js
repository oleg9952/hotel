import { combineReducers } from 'redux'
import navReducers from './navReducers'
import roomsReducers from './roomsReducers'
import bookingReducers from './bookingReducers'

export default combineReducers({
    navReducers,
    roomsReducers,
    bookingReducers
})