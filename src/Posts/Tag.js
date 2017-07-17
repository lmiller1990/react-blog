import React from 'react'

const tagStyle = { 
  display: 'inline-block',
  marginRight: '5px'
}

const Tag = ({tag}) =>
  <div style={tagStyle}>
    { tag.name }
  </div>

export default Tag
