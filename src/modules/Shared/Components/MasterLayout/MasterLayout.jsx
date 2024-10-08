import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {


  



  return (
    <>

        
        <div className="d-flex">
          <div className="bg-danger">
            <SideBar/>
          </div>
          <div className=" w-100 container-fluid">
            <Navbar/>
            <Outlet/>
          </div>
        </div>
      


    </>
  )
}
