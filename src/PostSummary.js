import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WHITE } from './Colors'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'
import PostDate from './Posts/PostDate'
import Tags from './Posts/Tags'

const borderWidth = '1px'
const marginWidth = '4px'
const paddingWidth = '20px'

const postStyle = {
  background: WHITE,
  padding: paddingWidth,
  border: `${borderWidth} solid grey`,
  margin: `${marginWidth} 0 0 ${marginWidth}`
}

const dateStyle = {
  marginBottom: '1em'
}

class PostSummary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props
    return (
      <div style={postStyle}>
        <PostDate 
          style={dateStyle}
          createdAt={post.createdAt} />

        <Link to={`/posts/${post._id}`}>
          <PostTitle 
            title={post.title} 
            createdAt={post.createdAt}
          />
        </Link>
        <PostIntro
          sentence={post.content.split('.')[0]}
        />
      </div>
    )
  } 
}

export default PostSummary
