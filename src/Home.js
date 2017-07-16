import React, {Component} from 'react'
import Projects from './Projects'
import Session from './Session/Session'
import PostsIndex from './PostsIndex'
import PostContainer from './Posts/PostContainer' 
import { Link, Route } from 'react-router-dom'

class Home extends Component {
  setLoggedIn () {
    console.log('Setting!')
  }

  render() {
    return (
      <div>
        <Link to='/posts'>Posts</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
        <Session setLoggedIn={this.setLoggedIn}/>

        <hr />

        <Route exact path='/posts' component={PostsIndex} />
        <Route path='/posts/:_id' 
          render={(props) => 
            <PostContainer 
              setLoggedIn={this.setLoggedIn} 
              {...props} 
            /> 
          }/>
        <Route exact path='/projects' component={Projects} />
      </div>
    )
  }
}
export default Home
