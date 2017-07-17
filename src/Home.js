import React, {Component} from 'react'
import Projects from './Projects'
import PostsIndex from './PostsIndex'
import TopMenu from './TopMenu'
import Session from './Session/Session'
import PostContainer from './Posts/PostContainer' 
import { Link, Route } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.setLoggedIn = this.setLoggedIn.bind(this)
  }

  setLoggedIn () {
    this.setState({ isLoggedIn: true })
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Session 
          setLoggedIn={this.setLoggedIn}
          isLoggedIn={this.state.isLoggedIn}
        />
        <hr />

        <Route exact path='/posts' component={PostsIndex} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/posts/:_id' 
          render={(props) => 
            <PostContainer 
              setLoggedIn={this.setLoggedIn} 
              {...props} 
            /> 
          }/>
      </div>
    )
  }
}
export default Home
