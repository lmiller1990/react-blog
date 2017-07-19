import React, { Component } from 'react'
import PostSummary from './PostSummary'
import axios from 'axios'

const indexStyle = {
  maxWidth: '400px',
  margin: '0 auto'
}

class PostsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    axios('http://localhost:4000/posts')
      .then(response => {
        this.setState({ posts: response.data })
      })
  }

  render () {
    return (
      <div style={indexStyle}>
        { this.state.posts.map(post => 
          <PostSummary post={post} key={post._id} />
        ) }
      </div>
    )
  }
}

export default PostsIndex
