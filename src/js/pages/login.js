import React, { Component } from 'react';

import LoginBox from './../components/login-box';


class LoginComponent extends Component {

  constructor(){
    super();

  }

  loginSubmit(login){
    console.log('ok', login);
  }



  render () {
    return (
      <div>
        <LoginBox onLoginSubmit={this.loginSubmit}/>
      </div>
    )
  }
}

export default LoginComponent
