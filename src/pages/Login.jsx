import React, { Component } from 'react'

class Login extends Component {
  state = {
    isDisabled: true,
    user: '',
    password: '',
  };

  // handleChangeUser = (event) => {
  //   this.setState({
  //     user: event.target.value,
  //   });
  // }

  // handleChangePassword = ({ target }) => {
  //   this.setState({
  //     password: target.value,
  //   });
  // }

  handleClick = () => {
    const { user } = this.state;
    const { history } = this.props;
    //muda o load para true
    this.setState({
      loading: true,
    });
    // minha logica
    localStorage.setItem('name', user);
    //muda o load para false
    this.setState({
      loading: false,
    });
    history.push('/home');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { user, password } = this.state;
      const lengthUser = user.length;
      const lengthPassword = password.length;
      // se for menor que 6 nao habilita, so habilita se for maior ou igual 6
      const test = lengthUser < 6 || lengthPassword < 6;
      this.setState({ isDisabled: test });
    });
  }

  validation = () => {

  }

  render() {
    const { isDisabled, user, password } = this.state;
    return (
      <div className="wrapper">
          <div className="Form">
            <input value={ user } name="user" type="text" onChange={ this.handleChange } />
            <input value={ password } name="password" type="password" onChange={ (event) => this.handleChange(event) } />
            <button onClick={ this.handleClick } disabled={ isDisabled } type="button">Logar</button>
          </div>
      </div>
    )
  }
}

export default Login;
