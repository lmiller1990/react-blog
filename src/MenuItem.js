import React from 'react'

const itemStyle = {
  textTransform: 'uppercase',
  display: 'inline-block'
}

const MenuItem = ({text}) => 
  <div style={itemStyle}>{ text }</div>


export default MenuItem
