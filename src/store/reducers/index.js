import { combineReducers } from 'redux'
import navReducers from './navReducers'
import roomsReducers from './roomsReducers'
import bookingReducers from './bookingReducers'
import searchReducers from './searchReducers'
import adminReducers from './adminReducers'
import authReducers from './authReducers'

export default combineReducers({
    navReducers,
    roomsReducers,
    bookingReducers,
    searchReducers,
    adminReducers,
    authReducers
})