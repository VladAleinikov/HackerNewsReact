import React from 'react'

const MyButton = ({ className, children, ...props }) => {
  return (
    <div className={'btn ' + className}>{children}</div>
  )
}

export default MyButton