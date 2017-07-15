import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'

class PostSummary extends Component {
  render() {
    const { post } = this.props
    return (
      <Link to={`/posts/${post._id}`}>
        <div>
          <PostTitle 
            title={post.title} 
            createdAt={post.createdAt}
          />
          <PostIntro
            sentence={post.content.split('.')[0]}
          />
        </div>
      </Link>
    )
  } 
}

export default PostSummary
