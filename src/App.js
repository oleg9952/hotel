import React, { useEffect } from 'react'
import { firestore, auth } from './fb_config'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from './store/actions/roomsActions'
import { fetchReviews } from './store/actions/reviewActions'
import { fetchUserAuthData } from './store/actions/authActions'
import { fetchBookingHistory } from './store/actions/bookingActions'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import BookingCart from './Components/Modals/BookingCart/BookingCart'
import CartOpenBtn from './Components/Modals/BookingCart/CartOpenBtn'

import Admin from './Components/Admin/Admin'
import AuthForm from './Components/AuthForm/AuthForm'

const App = () => {
  const { adminPage } = useSelector(state => state.adminReducers)
  const { cart } = useSelector(state => state.bookingReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
    firestore.collection('reviews').onSnapshot(() => {
      dispatch(fetchReviews())
    })
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(fetchUserAuthData({
          uid: user.uid,
          email: user.email
        }))

        firestore.collection('booking_ref').onSnapshot(() => {
          firestore.collection('bookings').onSnapshot(() => {
            dispatch(fetchBookingHistory(user.uid))
            console.log(1)
          })
          
        })
      } else {
        console.log('logged out...')
      }
    })
  }, [])

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
      </div>
    </Router>
  );
}

export default App
