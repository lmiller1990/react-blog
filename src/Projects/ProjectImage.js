import React from 'react'
import { MID_GREY } from '../Colors'

const imageStyle = {
  width: '9em',
  borderRight: '1px solid ' + MID_GREY,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const ProjectImage = () => 
  <div style={imageStyle}>
    Image
  </div>

export default ProjectImage
