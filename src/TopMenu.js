import React from 'react'
import MenuItem from './MenuItem'
import Projects from './Projects'
import PostsIndex from './PostsIndex'
import { Link, Route } from 'react-router-dom'

const TopMenu = () => 
  <div>
    <Link to='/posts'>
      <MenuItem text={'posts'} />
    </Link>
    <Link to='/projects'>
      <MenuItem text={'projects'} />
    </Link>
    <Link to='/about'>
      <MenuItem text={'about'} />
    </Link>
    <Link to='/resume'>
      <MenuItem text={'resume'} />
    </Link>

    <Route exact path='/posts' component={PostsIndex} />
    <Route exact path='/projects' component={Projects} />
  </div>

export default TopMenu
