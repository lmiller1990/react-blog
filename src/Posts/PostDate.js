import React from 'react'
import moment from 'moment'

const PostDate = ({createdAt, style}) => 
  <div style={style}>
    {moment(createdAt).format('DD MMM YY')}
  </div>

export default PostDate


