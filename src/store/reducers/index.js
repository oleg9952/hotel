import { combineReducers } from 'redux'
import navReducers from './navReducers'
import roomsReducers from './roomsReducers'
import bookingReducers from './bookingReducers'
import searchReducers from './searchReducers'
import adminReducers from './adminReducers'

export default combineReducers({
    navReducers,
    roomsReducers,
    bookingReducers,
    searchReducers,
    adminReducers
})