import React from 'react'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className=' w-full flex justify-center items-center mb-10 mt-3'>
        <img src={logo} alt='logo' 
          className=' h-16'
        />
    </div>
  )
}

export default Navbar