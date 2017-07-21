import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

const menuStyle = {
  height: '3em',
  backgroundColor: 'grey',
}

const TopMenu = () => 
  <div style={menuStyle}>
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
  </div>

export default TopMenu
