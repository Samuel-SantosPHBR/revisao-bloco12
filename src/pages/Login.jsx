import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="Form">
            <input type="text" />
            <input type="password" />
            <button disabled type="button">Logar</button>
          </div>
      </div>
    )
  }
}

export default Login;
