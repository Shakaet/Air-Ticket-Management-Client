import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../component/Nav'

export const MainLayout = () => {
  return (
    <div>
        
        <Nav></Nav>
        <Outlet></Outlet>

    </div>
  )
}
