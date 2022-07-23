import React from 'react'

const MyButton = ({ className, onClick, children, ...props }) => {
  return (
    <div onClick={onClick} className={'btn ' + className}>{children}</div>
  )
}

export default MyButton