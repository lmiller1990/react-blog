import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Editor, EditorState, ContentState} from 'draft-js'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }

    this.onChange = (editorState) => this.setState({editorState})
  }

  saveChanges () {
    const content = this.state.editorState.getCurrentContent().getPlainText()
    const { _id } = this.props.match.params

    axios.post(`http://localhost:4000/posts/${_id}`, {
      content: content
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
    
  }

  componentDidMount () {
    const { _id } = this.props.match.params
    axios(`http://localhost:4000/posts/${_id}`)
      .then(res => 
      this.setState({
        editorState: EditorState.createWithContent(
        ContentState.createFromText(res.data.content)
      )}))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.saveChanges()}>Save</button>
        <Editor onChange={this.onChange} editorState={this.state.editorState} />
      </div>
    )
  }
}

PostContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
export default PostContainer
