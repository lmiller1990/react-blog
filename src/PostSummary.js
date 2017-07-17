import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WHITE } from './Colors'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'
import Tags from './Posts/Tags'

const postStyle = {
  border: '1px dotted grey',
  background: WHITE,
  marginTop: '0.75em',
  padding: '0.5em'
}

class PostSummary extends Component {
  render() {
    const { post } = this.props
    return (
      <Link to={`/posts/${post._id}`}>
        <div style={postStyle}>
          <PostTitle 
            title={post.title} 
            createdAt={post.createdAt}
          />
          <PostIntro
            sentence={post.content.split('.')[0]}
          />
          <Tags tags={[ { _id: 1, name: 'JS' }, { _id: 2, name: 'Vuex' } ]} />
        </div>
      </Link>
    )
  } 
}

export default PostSummary
