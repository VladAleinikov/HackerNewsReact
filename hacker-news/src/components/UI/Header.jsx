import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <h1 className='header'><NavLink to='/'>HACKER NEWS</NavLink></h1>
  )
}

export default Header