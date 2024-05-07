import React from 'react'
import Navbar from '../widgets/navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../widgets/footer/Footer'
import MainRoutes from '../routes/MainRoutes'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet/> */}
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default Layout