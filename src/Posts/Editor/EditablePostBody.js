import React from 'react'
import PropTypes from 'prop-types'
import {Editor} from 'draft-js'

const EditablePostBody = ({change, loggedIn, editorState}) =>
  <Editor 
    onChange={change} 
    editorState={editorState} 
    readOnly={loggedIn ? false : true}
  />

EditablePostBody.propTypes = {
  change: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

export default EditablePostBody
