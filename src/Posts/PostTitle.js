import React from 'react'

const titleStyle = {
  marginBottom: '0.9em'
}

const PostTitle = ({title, createdAt}) => 
  <div style={titleStyle}>
    {/*moment(createdAt).format('MMM YY')*/} {title}
  </div>

export default PostTitle
