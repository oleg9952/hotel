import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from './store/actions/roomsActions'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import BookingCart from './Components/Modals/BookingCart/BookingCart'
import CartOpenBtn from './Components/Modals/BookingCart/CartOpenBtn'

import Admin from './Components/Admin/Admin'

const App = () => {
  const { adminPage } = useSelector(state => state.adminReducers)
  const { cart } = useSelector(state => state.bookingReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
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
            </div>
          )
        }
      </div>
    </Router>
  );
}

export default App
