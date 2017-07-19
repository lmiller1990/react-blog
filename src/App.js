import React, { Component } from 'react';
import Home from './Home'
import { LIGHT_GREY } from './Colors'

const postsStyle = {
  maxWidth: '900px',
  margin: '0 auto',
}

const backgroundStyle = {
  background: LIGHT_GREY
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
