import React, { useEffect } from 'react'
import Firebase from './fb_config'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from './store/actions/roomsActions'
import { fetchReviews } from './store/actions/reviewActions'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import BookingCart from './Components/Modals/BookingCart/BookingCart'
import CartOpenBtn from './Components/Modals/BookingCart/CartOpenBtn'

import Admin from './Components/Admin/Admin'
import AuthForm from './Components/AuthForm/AuthForm'

const App = () => {
  const db = Firebase.firestore()
  const auth = Firebase.auth()

  const { adminPage } = useSelector(state => state.adminReducers)
  const { cart } = useSelector(state => state.bookingReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
    db.collection('reviews').onSnapshot(() => {
      dispatch(fetchReviews())
    })
  }, [])

  return (
    <Router>
      <div className="App">
        {
          adminPage ? <Admin /> : (
            <div className="main">
              {/* <Header /> */}
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
