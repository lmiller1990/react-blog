import React from 'react'
import Projects from './Projects'
import Session from './Session/Session'
import PostsIndex from './PostsIndex'
import PostContainer from './Posts/PostContainer' 
import { Link, Route } from 'react-router-dom'

const Home = () => 
  <div>
    <Link to='/posts'>Posts</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/about'>About</Link>
    <Link to='/resume'>Resume</Link>
    <Session />

    <hr />

    <Route exact path='/posts' component={PostsIndex} />
    <Route path='/posts/:_id' component={PostContainer} />
    <Route exact path='/projects' component={Projects} />
  </div>

export default Home
