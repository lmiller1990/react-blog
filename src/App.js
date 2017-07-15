import React, { Component } from 'react';
import Home from './Home'

const postsStyle = {
  maxWidth: '700px',
  margin: '0 auto'
}

class App extends Component {
  render() {
    return (
      <div style={postsStyle}>
        <Home />
      </div>
    )
  }
}

export default App;
