import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WHITE, DARK_GREY } from './Colors'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'
import PostDate from './Posts/PostDate'
import Tags from './Posts/Tags'

const borderWidth = '1px'
const marginWidth = '4px'
const paddingWidth = '20px'

const titleStyle = {
  fontSize: '1.4em',
  marginBottom: '1.2em'
}

const introStyle = {
  fontWeight: '100'
}

const postStyle = {
  background: WHITE,
  padding: paddingWidth,
  border: `${borderWidth} solid rgb(200, 201, 211)`,
  height: '250px'
}

const dateStyle = {
  marginBottom: '1.2em',
  color: DARK_GREY
}

class PostSummary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props
    return (
      <div className={"post-summary"} style={postStyle}>
        <PostDate 
          style={dateStyle}
          createdAt={post.createdAt} />

        <Link to={`/posts/${post._id}`} 
          style={{ textDecoration: 'none' }}>
          <PostTitle 
            style={titleStyle}
            title={post.title} 
            createdAt={post.createdAt}
          />
        </Link>
        <PostIntro
          style={introStyle}
          sentence={post.content.split('.')[0]}
        />
      </div>
    )
  } 
}

export default PostSummary
