import React, {Component} from 'react'
import Login from './Login'
import { Link, Route } from 'react-router-dom'

const Session = ({setLoggedIn}) => 
  <div>
    <Link to='/login'>Login</Link>
    <Route exact path='/login' 
      render={(props) => 
        (<Login setLoggedIn={setLoggedIn} {...props}
      />)} 
    />
  </div>

export default Session
