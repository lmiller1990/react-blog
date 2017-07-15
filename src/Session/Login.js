import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type='submit' value='submit' />
      </form>
    )
  }
} 

export default LoginForm
