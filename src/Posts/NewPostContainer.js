import React, { Component } from 'react'
import axios from 'axios'
import {EditorState, Editor, ContentState} from 'draft-js'
import { BLOG_API } from '../Constants'

const titleStyle = {
  textAlign: 'center',
}

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentEditorState: EditorState.createWithContent(
        ContentState.createFromText('Enter post...')
      ),
      titleEditorState: EditorState.createWithContent(
        ContentState.createFromText('Enter title...')
      )
    }

    this.onContentChange = (contentEditorState) => 
      this.setState({contentEditorState})
    this.onTitleChange = (titleEditorState) => 
      this.setState({titleEditorState})
  }

  saveChanges () {
    const title = this.state.titleEditorState.getCurrentContent().getPlainText()
    const content = this.state.contentEditorState.getCurrentContent().getPlainText()

    axios.post(`${BLOG_API}/posts/new`, {
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
          />
        </div>
        <Editor 
          onChange={this.onContentChange} 
          editorState={this.state.contentEditorState} 
        />
        <button onClick={() => this.saveChanges()}>Create</button>
      </div>
    )
  }
}

export default PostContainer
