import React from 'react'
import { MID_GREY } from '../Colors' 
import ProjectImage from './ProjectImage'

const projectStyle = {
  display: 'flex',
  height: '9em',
  flexDirection: 'row',
  border: '1px solid ' + MID_GREY,
  borderRadius: '3px',

}

const ProjectContainer = ({project}) => 
  <div style={projectStyle}>
    <ProjectImage />
    <div>
      <div>
        {project.name}
      </div>
      <div>
        {project.description}
      </div>
    </div>
  </div>

export default ProjectContainer
