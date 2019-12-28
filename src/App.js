import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchRooms } from './store/actions/roomsActions'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
  }, [])

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App
