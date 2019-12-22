import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

const App = () => {

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
