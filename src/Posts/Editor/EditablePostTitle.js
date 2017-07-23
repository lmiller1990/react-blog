import React from 'react'
import PropTypes from 'prop-types'
import {Editor} from 'draft-js'

const titleStyle = {
  textAlign: 'center',
  marginBottom: '3em',
}

const EditablePostTitle = ({change, clicked, isReadOnly, editorState}) =>
  <div 
    onClick={() => clicked()}
    style={titleStyle}>
    <Editor 
      onChange={change} 
      editorState={editorState} 
      readOnly={isReadOnly ? true : false}
    />
  </div>

EditablePostTitle.propTypes = {
  change: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
  isReadOnly: PropTypes.bool.isRequired
}

export default EditablePostTitle
