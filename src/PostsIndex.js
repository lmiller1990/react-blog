import React, { Component } from 'react'
import axios from 'axios'
import PostSummary from './PostSummary'
import { BLOG_API } from './Constants'
import { mockPosts } from './Mocks/Posts'

const indexStyle = {
  gridGap: '2px',
  display: 'grid',
  gridTemplateColumns: '33.33% 33.33% 33.33%',
}

class PostsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: mockPosts,
      doneLoading: false
    }
  }

  componentDidMount () {
    axios(`${BLOG_API}posts`)
    .then(response => {
      this.setState({ 
        posts: response.data,
        doneLoading: true
      })
    })
    .catch(err => console.log(err))
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
