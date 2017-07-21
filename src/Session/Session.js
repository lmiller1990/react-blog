import React from 'react'
import { Link } from 'react-router-dom'

const Session = ({setLoggedIn, isLoggedIn}) => {
  if (1 === 4) {
    return (
      <div></div>
    )
  } else {
    return (
      <span className="my span">
        <Link to='/posts/new'>New Post</Link>
        <Link to='/login'>Login</Link>

      </span>
    )
  }
}

export default Session
