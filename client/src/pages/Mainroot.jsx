import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../components/Appbar/Appbar'

const Mainroot = () => {
  return (
    <>
<Appbar/>
<Outlet/>
    
    </>
  )
}

export default Mainroot