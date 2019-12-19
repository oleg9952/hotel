import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import MobileNav from './Components/Navigation/Mobile/Nav'

const App = () => {
  return (
    <div className="App">
      <MobileNav />
      <div className="close_nav"></div>
      <div className="wrapper active">
        <Header />
        <Content />
      </div>
      
    </div>
  );
}

export default App
