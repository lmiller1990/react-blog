import React, { Component } from 'react'
import PostSummary from './PostSummary'
import axios from 'axios'

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
      <div>
        { this.state.posts.map(post => 
          <PostSummary post={post} key={post._id} />
        ) }
      </div>
    )
  }
}

export default PostsIndex
