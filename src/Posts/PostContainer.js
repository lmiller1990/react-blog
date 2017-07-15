import React, { Component } from 'react'
import axios from 'axios'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: ''
    }
  }

  componentDidMount () {
    const { _id } = this.props.match.params
    axios(`http://localhost:4000/posts/${_id}`)
      .then(res => this.setState({ post: res.data }))
  }

  render() {
    return (
      <div>
        {this.state.post.content}
      </div>
    )
  }
}

export default PostContainer
