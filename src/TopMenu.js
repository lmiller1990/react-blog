import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
import { DARK_GREY } from './Colors'
import { TOP_MENU_PADDING } from './Constants'

const menuStyle = {
  height: TOP_MENU_PADDING + 'em',
  position: 'fixed',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: DARK_GREY
}

const menuItemsStyle = {
  display: 'flex',
}

const linkStyle = {
  textDecoration: 'none'
}

const TopMenu = () => 
  <div style={menuStyle}>
    <div style={menuItemsStyle}>
      <Link to='/posts' style={linkStyle}>
        <MenuItem text={'posts'} />
      </Link>
      <Link to='/projects' style={linkStyle}>
        <MenuItem text={'projects'} />
      </Link>
      <Link to='/about' style={linkStyle}>
        <MenuItem text={'about'} />
      </Link>
      <Link to='/resume' style={linkStyle}>
        <MenuItem text={'resume'} />
      </Link>
    </div>
  </div>

export default TopMenu
