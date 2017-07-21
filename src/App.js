import React, { Component } from 'react';
import { LIGHT_GREY } from './Colors'
import Home from './Home'
import './App.css'

const postsStyle = {
  margin: '0 auto',
}

const backgroundStyle = {
  // background: LIGHT_GREY
}

class App extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <div style={postsStyle}>
          <Home />
        </div>
      </div>
    )
  }
}

export default App;
