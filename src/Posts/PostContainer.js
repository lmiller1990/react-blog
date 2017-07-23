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
      canSaveAndDelete: false,
      clicks: 0
    }

    this.onContentChange = (contentEditorState) => 
      this.setState({contentEditorState})
    this.onTitleChange = (titleEditorState) => 
      this.setState({titleEditorState})
    this.titleClicked = this.titleClicked.bind(this)
  }

  titleClicked () {
    let newClicks = this.state.clicks + 1
    this.setState({clicks: newClicks})

    if (newClicks > 5) {
      this.setState({canSaveAndDelete: true})
    }
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
    const saveAndDeleteButtons = this.state.canSaveAndDelete === true 
      ? <div>
          <button onClick={() => this.saveChanges()}>Save</button>
          <button onClick={() => this.deletePost()}>Delete</button>
        </div>
      : null
     
    return (
      <div>
        {saveAndDeleteButtons}
        <EditablePostTitle 
          clicked={this.titleClicked}
          change={this.onTitleChange} 
          editorState={this.state.titleEditorState} 
          isReadOnly={!this.state.canSaveAndDelete}
        />
        <EditablePostBody
          change={this.onContentChange} 
          editorState={this.state.contentEditorState} 
          isReadOnly={!this.state.canSaveAndDelete}
        />
      </div>
    )
  }
}

PostContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
export default PostContainer
