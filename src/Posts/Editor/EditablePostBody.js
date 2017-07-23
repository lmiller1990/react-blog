import React from 'react'
import PropTypes from 'prop-types'
import {Editor} from 'draft-js'

const EditablePostBody = ({change, isReadOnly, editorState}) =>
  <Editor 
    onChange={change} 
    editorState={editorState} 
    readOnly={isReadOnly ? true : false}
  />

EditablePostBody.propTypes = {
  change: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  isReadOnly: PropTypes.bool.isRequired
}

export default EditablePostBody
