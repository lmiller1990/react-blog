import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WHITE, DARK_GREY, MID_GREY } from './Colors'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'
import PostDate from './Posts/PostDate'
// import Tags from './Posts/Tags'

const borderWidth = '1px'
const paddingWidth = '20px'

const titleStyle = {
  fontSize: '1.4em',
  marginBottom: '3em'
}

const postStyle = {
  background: WHITE,
  padding: paddingWidth,
  border: `${borderWidth} solid rgb(200, 201, 211)`,
  height: '250px',
}

const linkStyle = {
  textDecoration: 'none',
  color: DARK_GREY,
}

const dateStyle = {
  marginBottom: '1.2em',
  color: MID_GREY,
}

class PostSummary extends Component {
  render() {
    const { post } = this.props
    return (
      <div className={"post-summary"} style={postStyle}>
        <PostDate 
          style={dateStyle}
          createdAt={post.createdAt} />

        <Link to={`/posts/${post._id}`} 
          style={linkStyle}>
          <PostTitle 
            style={titleStyle}
            title={post.title} 
            createdAt={post.createdAt}
          />
        </Link>
        <PostIntro
          style={{color: MID_GREY}}
          sentence={post.content.split('.')[0]}
        />
      </div>
    )
  } 
}

export default PostSummary
