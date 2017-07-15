import React from 'react'
import Login from './Login'
import { Link, Route } from 'react-router-dom'

const Session = () => {

  return (
    <div>
      <Link to='/login'>Login</Link>
      <Route exact path='/login' component={Login} />
    </div>
  )
}

export default Session
