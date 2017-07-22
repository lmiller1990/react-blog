import React, {Component} from 'react'
import ProjectContainer from './Projects/ProjectContainer'
import {ProjectList} from './Projects/ProjectList'

class Projects extends Component {
  constructor(props) {
    super(props)

    console.log(ProjectList, this.ProjectList)
    this.state = {
      projectList: ProjectList
    }
  }

  render() {
    return (
      <div>
        { ProjectList.map(project => 
          <ProjectContainer project={project} key={project.id}/>
        ) }
      </div>
    )
  }
} 

export default Projects
