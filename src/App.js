import React from 'react'
import AcomDAO from './components/Pages/AcomDAO';
import { Routes, Route, } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import { headerRoutes }from "./components/Routes/Route"


const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path={headerRoutes.AcomDAO} element={<AcomDAO />} />
  </Routes>

  )
}

export default App