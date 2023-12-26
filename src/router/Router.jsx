import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'

const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Main/>}/>
    </Routes>
    </>
  )
}

export default Router