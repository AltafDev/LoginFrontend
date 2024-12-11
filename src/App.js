import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Signupform from './Header/Signupform'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Loginform from './Loginform'
import Home from './Pages/Home'
import MobileHeader from './Header/MobileHeader';
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <MobileHeader/>
      <Routes>
        
        <Route path='/Signupform' element={<Signupform/>} />
        <Route path='/Loginform' element={<Loginform/>} />
        <Route path='/' element={<Home/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
