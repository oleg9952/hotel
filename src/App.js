import React, { useEffect } from 'react'
import { firestore, auth } from './fb_config'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from './store/actions/roomsActions'
import { fetchReviews } from './store/actions/reviewActions'
import { fetchUserAuthData } from './store/actions/authActions'
import { fetchBookingHistory } from './store/actions/bookingActions'
import { fetchFavorites } from './store/actions/favoritesActions'
import { resetFavorites } from './store/actions/favoritesActions'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import BookingCart from './Components/Modals/BookingCart/BookingCart'
import CartOpenBtn from './Components/Modals/BookingCart/CartOpenBtn'

import Admin from './Components/Admin/Admin'
import AuthForm from './Components/AuthForm/AuthForm'

import Notification from './Components/Modals/NotificationModal/Notification'

const App = () => {
  const { adminPage } = useSelector(state => state.adminReducers)
  const { cart } = useSelector(state => state.bookingReducers)
  const { notifType, authError } = useSelector(state => state.authReducers)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchRooms())
    firestore.collection('reviews').onSnapshot(() => {
      dispatch(fetchReviews())
    })
    auth.onAuthStateChanged(user => {
      if(user) {
        firestore.collection('users').onSnapshot(() => {
          dispatch(fetchUserAuthData({
            uid: user.uid,
            email: user.email
          }))
        })
        firestore.collection('bookings').onSnapshot(() => {
          dispatch(fetchBookingHistory(user.uid))
          dispatch(fetchRooms())
        })
        firestore.collection('favorites').onSnapshot(() => {
          dispatch(fetchFavorites(user.uid))
        })
      } else {
        dispatch(resetFavorites())
        console.log('logged out')
      }
    })
  }, [])

  const displayNotif = (notif, err) => {
    if(notif !== null && err === null) {
      return true
    } else if(notif && err) {
      return true
    } else {
      return false
    }
  }

  return (
    <Router>
      <div className="App">
        {
          adminPage ? <Admin /> : (
            <div className="main">
              <Header />
              <Content />
              <Footer />
              <BookingCart cart={cart} />
              <CartOpenBtn />
              <AuthForm />
            </div>
          )
        }
        {
          displayNotif(notifType, authError) ? (
            <Notification />
          ) : ''
        }
      </div>
    </Router>
  );
}

export default App
