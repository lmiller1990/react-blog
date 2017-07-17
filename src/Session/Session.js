import React from 'react'
import Login from './Login'
import { Link, Route } from 'react-router-dom'

const Session = ({setLoggedIn, isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <div></div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Route exact path='/login' 
          render={(props) => 
            (<Login setLoggedIn={setLoggedIn} {...props}
          />)} 
        />
      </div>
    )
  }
}

export default Session
