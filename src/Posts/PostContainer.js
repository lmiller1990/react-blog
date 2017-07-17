import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {EditorState, ContentState} from 'draft-js'
import EditablePostTitle from './Editor/EditablePostTitle'
import EditablePostBody from './Editor/EditablePostBody'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentEditorState: EditorState.createEmpty(),
      titleEditorState: EditorState.createEmpty(),
    }

    this.onContentChange = (contentEditorState) => 
      this.setState({contentEditorState})
    this.onTitleChange = (titleEditorState) => 
      this.setState({titleEditorState})
  }

  saveChanges () {
    const title = this.state.titleEditorState.getCurrentContent().getPlainText()
    const content = this.state.contentEditorState.getCurrentContent().getPlainText()
    const { _id } = this.props.match.params

    axios.post(`http://localhost:4000/posts/${_id}`, {
      title: title, 
      content: content 
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  componentDidMount () {
    console.log('Post conatiner mounted')
    const { _id } = this.props.match.params
    axios(`http://localhost:4000/posts/${_id}`)
    .then(res => 
    this.setState({
      titleEditorState: EditorState.createWithContent(
        ContentState.createFromText(res.data.title)
      ),
      contentEditorState: EditorState.createWithContent(
        ContentState.createFromText(res.data.content),
      )
    }))
  }

  render() {
    const { isLoggedIn } = this.props
    const saveButton = isLoggedIn 
      ? <button onClick={() => this.saveChanges()}>Save</button>
      : null
    return (
      <div>
        {saveButton}
        <EditablePostTitle 
          change={this.onTitleChange} 
          editorState={this.state.titleEditorState} 
          loggedIn={isLoggedIn}
        />
        <EditablePostBody
          change={this.onContentChange} 
          editorState={this.state.contentEditorState} 
          loggedIn={isLoggedIn}
        />
      </div>
    )
  }
}

PostContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
export default PostContainer
