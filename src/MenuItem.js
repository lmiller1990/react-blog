import React from 'react'

const itemStyle = {
  textTransform: 'capitalize',
  paddingLeft: '2em',
  color: 'white'
}

const MenuItem = ({text}) => 
  <div style={itemStyle}>{ text }</div>


export default MenuItem
