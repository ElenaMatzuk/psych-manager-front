import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import login, { loginSuccess, loginRequest } from '../../Redux/Auth/AuthAction.js';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  /**
   * Из инпутов мы получаем данные, введенные пользователем, в локальный state
   * и передаем его в action login (thunk)(AuthAction.js)
   * эти данные попадают в login (аргумент data)
   */
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div class="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Wellcome</b>
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start</p>
              <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={this.props.isLoading}
                    >
                      Log In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <p className="mb-0">
                <NavLink to="/register" className="text-center">
                  Register a new membership
                </NavLink>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLogged: state.isLogged,
  };
};

// Так не работает

// const mapDispatchToProps = {
//   login,
// };

// И так не работает

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
