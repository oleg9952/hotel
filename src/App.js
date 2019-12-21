import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMobileNav } from './store/actions/navActions'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import DesktopNav from './Components/Navigation/Desktop/Nav'
import MobileNav from './Components/Navigation/Mobile/Nav'

const App = () => {
  const toggeleNav = useSelector(state => state.navReducers.mobileNav)
  const dispatch = useDispatch()

  return (
    <Router>
      <div className="App">
        <MobileNav />
        { !toggeleNav ? <DesktopNav /> : '' }
        <div 
          className="close_nav" 
          style={{display: toggeleNav ? 'block' : 'none'}}
          onClick={() => dispatch(toggleMobileNav())}
        ></div>
        <div className={`wrapper ${toggeleNav ? 'active' : ''}`}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App
