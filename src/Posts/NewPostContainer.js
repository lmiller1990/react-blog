import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {EditorState, Editor, ContentState} from 'draft-js'

const titleStyle = {
  textAlign: 'center',
}

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

    axios.post(`http://localhost:4000/posts/new`, {
      title: title, 
      content: content 
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div style={titleStyle}>
          <Editor 
            onChange={this.onTitleChange} 
            editorState={this.state.titleEditorState} 
            placeholder={'Enter post title...'}
          />
        </div>
        <Editor 
          onChange={this.onContentChange} 
          editorState={this.state.contentEditorState} 
          placeholder={'Enter post content...'}
        />
        <button onClick={() => this.saveChanges()}>Create</button>
      </div>
    )
  }
}

export default PostContainer
