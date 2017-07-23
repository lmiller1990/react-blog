import React from 'react'
import { LARGE_TEXT_SIZE } from '../Constants'

const detailsStyle = {
  padding: '1em',
}

const ProjectDetails = ({project }) =>
  <div style={detailsStyle}>
    <div style={{fontSize: LARGE_TEXT_SIZE}}>
      {project.name}
    </div>
    <br />
    <div>
      {project.description}
    </div>
    <div>
      Demo: <a href={project.demoLink}>{project.demoLink}</a>
    </div>
    <div>
      Source: <a href={project.sourceLink}>{project.sourceLink}</a>
    </div>
  </div>

export default ProjectDetails
