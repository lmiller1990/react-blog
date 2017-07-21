import React from 'react'
import PropTypes from 'prop-types'
import {Editor} from 'draft-js'

const titleStyle = {
  textAlign: 'center',
  marginBottom: '3em',
}

const EditablePostTitle = ({change, loggedIn, editorState}) =>
  <div style={titleStyle}>
    <Editor 
      onChange={change} 
      editorState={editorState} 
      readOnly={!loggedIn ? false : true}
    />
  </div>

EditablePostTitle.propTypes = {
  change: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

export default EditablePostTitle
