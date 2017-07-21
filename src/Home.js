import React, {Component} from 'react'
import Projects from './Projects'
import PostsIndex from './PostsIndex'
import TopMenu from './TopMenu'
import Session from './Session/Session'
import Login from './Session/Login'
import NewPostContainer from './Posts/NewPostContainer'
import PostContainer from './Posts/PostContainer' 
import { Route, Switch } from 'react-router-dom'
import { TOP_MENU_PADDING } from './Constants'

const bodyStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  paddingTop: parseFloat(TOP_MENU_PADDING) + parseFloat(1) + 'em'
}

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

        <div className='main-body' style={bodyStyle}>
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
        </div>
      
      </div>
    )
  }
}
export default Home
