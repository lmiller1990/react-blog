import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { BLOG_API } from '../Constants'
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

  deletePost () {
    const { _id } = this.props.match.params

    axios.delete(`${BLOG_API}posts/delete`, {
      params: {
        _id: _id
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  saveChanges () {
    const title = this.state.titleEditorState.getCurrentContent().getPlainText()
    const content = this.state.contentEditorState.getCurrentContent().getPlainText()
    const { _id } = this.props.match.params

    axios.post(`${BLOG_API}posts/${_id}`, {
      title: title, 
      content: content 
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  componentDidMount () {
    const { _id } = this.props.match.params
    axios(`${BLOG_API}posts/${_id}`)
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
    const saveButton = <button onClick={() => this.saveChanges()}>Save</button>
     
    return (
      <div>
        <button onClick={() => this.deletePost()}>Delete</button>
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
