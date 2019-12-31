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

const App = () => {
  const { cart } = useSelector(state => state.bookingReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <BookingCart cart={cart} />
        <CartOpenBtn />
      </div>
    </Router>
  );
}

export default App
