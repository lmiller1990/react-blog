import React from 'react'
import Tag from './Tag'

const tagsStyle = {
  textAlign: 'right'
}

const Tags = ({tags}) =>
  <div style={tagsStyle}>
    { tags.map(tag =>
      <Tag tag={tag} key={tag._id} />
    ) }
  </div>

export default Tags
