import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

const menuStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '22em',
  margin: '0 auto'
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
