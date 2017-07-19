import React from 'react'
import moment from 'moment'

const PostDate = ({createdAt, style}) => 
  <div style={style}>
    {moment(createdAt).format('MMM YY')}
  </div>

export default PostDate


