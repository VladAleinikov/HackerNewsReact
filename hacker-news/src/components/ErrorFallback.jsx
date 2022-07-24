import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorFallback = ({ error }) => {
      return (
            <div className='error'>
                  <h2>Something went wrong</h2>
                  <h3>Error message: {error.message}</h3>
                  <h3>Please go to <NavLink to='/'>Main Page</NavLink></h3>
            </div>
      )
}

export default ErrorFallback