import React from 'react'
import { Link, Route } from 'react-router-dom'

const Session = ({setLoggedIn, isLoggedIn}) => {
  if (isLoggedIn) {
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
