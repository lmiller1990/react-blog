import React, {Component} from 'react'
import Projects from './Projects'
import PostsIndex from './PostsIndex'
import TopMenu from './TopMenu'
import Session from './Session/Session'
import Login from './Session/Login'
import NewPostContainer from './Posts/NewPostContainer'
import PostContainer from './Posts/PostContainer' 
import { Route, Switch } from 'react-router-dom'

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
        <hr />

        <Switch>
          <Route exact path='/posts/new' component={NewPostContainer} />
          <Route exact path='/posts/:_id' 
            render={(props) => 
              <PostContainer 
                isLoggedIn={this.state.isLoggedIn}
                {...props} 
              /> 
            }
          />
        </Switch>

        <Route exact path='/login' 
          render={(props) => 
            (<Login setLoggedIn={this.setLoggedIn} {...props}
          />)} 
        />
        <Route exact path='/posts' component={PostsIndex} />
        <Route exact path='/projects' component={Projects} />
        <Session 
          setLoggedIn={this.setLoggedIn}
          isLoggedIn={this.state.isLoggedIn}
        />
      </div>
    )
  }
}
export default Home
