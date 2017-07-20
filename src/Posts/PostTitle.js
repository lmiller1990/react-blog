import React from 'react'

const titleStyle = {
  fontSize: '1.4em'
}

const PostTitle = ({title, padding}) => 
  <div style={{...padding, ...titleStyle}}>
    {title}
  </div>

export default PostTitle
