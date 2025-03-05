import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../component/Nav'
import Footer from '../component/Footer'

export const MainLayout = () => {
  return (
    <div>
        
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  )
}
