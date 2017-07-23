import React from 'react'
import { MID_GREY } from '../Colors' 
import ProjectImage from './ProjectImage'
import ProjectDetails from './ProjectDetails'

const projectStyle = {
  display: 'flex',
  height: '9em',
  flexDirection: 'row',
  border: '1px solid ' + MID_GREY,
}

const ProjectContainer = ({project}) => 
  <div style={projectStyle}>
    <ProjectImage />
    <ProjectDetails project={project} />
  </div>

export default ProjectContainer
