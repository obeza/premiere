import React from 'react'

class LoginBox extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      passe: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasseChange(e) {
    this.setState({passe: e.target.value});
  }

  handleSubmit(e) {
     e.preventDefault();
     var email = this.state.email;
     var passe = this.state.passe.trim();
     console.log('form ' + email + " " + passe);
  //   if (!email || !passe) {
  //     return;
  //   }
    this.props.onLoginSubmit({email: email, passe: passe});
  }

  render () {
    return(
    <div class="login">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div class="panel panel-default login-panel">
            <div class="panel-body">
              <h2>Bienvenue</h2>
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
              />
            </div>
            <div class="form-group">
              <label for="passe">Mot de passe</label>
              <input
                type="passe"
                class="form-control"
                id="passe"
                placeholder="Mot de passe"
                required
                value={this.state.passe}
                onChange={this.handlePasseChange.bind(this)}
              />
            </div>
            <div class="panel-body login-panel-action">
              <button
                type="button"
                class="btn btn-primary"
                type ="submit"
              >
              Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginBox;
