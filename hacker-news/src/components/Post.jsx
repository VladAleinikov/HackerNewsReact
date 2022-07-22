import React from 'react'
import { NavLink } from 'react-router-dom'

const Post = ({ title, author, score, date, id, ...props}) => {

  return (
    <NavLink className="post" to={"/"+id}>
      <h3>{title}</h3>
      <div className="rating">Story score: {score}</div>
      <div className="author">By {author}</div>
      <div className="creation-date">Creation date: {date}</div>
    </NavLink>
  )
}

export default Post