import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WHITE } from './Colors'
import PostTitle from './Posts/PostTitle'
import PostIntro from './Posts/PostIntro'
import Tags from './Posts/Tags'

class PostSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postStyle: {
        background: WHITE,
        marginTop: '0.75em',
        padding: '0.5em'
      }
    }
    console.log(this.state.postStyle)
  }

  render() {
    const { post } = this.props
    return (
        <div style={this.state.postStyle}>
          <Link to={`/posts/${post._id}`}>
            <PostTitle 
              title={post.title} 
              createdAt={post.createdAt}
            />
          </Link>
          <PostIntro
            sentence={post.content.split('.')[0]}
          />
          <Tags tags={[ { _id: 1, name: 'Tags' }, { _id: 2, name: 'More tags' } ]} />
        </div>
    )
  } 
}

export default PostSummary
