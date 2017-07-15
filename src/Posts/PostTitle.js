import React from 'react'
import moment from 'moment'

const PostTitle = ({title, createdAt}) => 
  <div>
    {moment(createdAt).format('MMM YY')} - {title}
  </div>

export default PostTitle
