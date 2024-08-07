import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-danger">
            <SideBar/>
          </div>
          <div className="col-md-9 bg-warning">
            <Navbar/>
            <Outlet/>
          </div>
        </div>
      </div>


    </>
  )
}
