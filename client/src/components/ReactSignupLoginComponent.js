import PropTypes from 'prop-types';
import React from 'react';

import Login from './Login';
import Signup from './Signup';
import RecoverPassword from './RecoverPassword';

import CreateUser from '../utils/API';

// Our only css dependency
import './normalize.css';
import { isAbsolute } from 'path';

class ReactSignupLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.bubleUpSignup = this.bubleUpSignup.bind(this);
    this.bubleUpLogin = this.bubleUpLogin.bind(this);
    this.bubleUpRecoverPassword = this.bubleUpRecoverPassword.bind(this);

    this.state = {
      isLogin: this.props.isLogin,
      isRecoveringPassword: this.props.isRecoveringPassword,
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  bubleUpSignup() {
    //checks if the password and the confirm password match
    if(this.state.password == this.state.passwordConfirmation){
      this.props.handleSignup({
        username: this.state.username,
        password: this.state.password
      });
      
      var data = {
        username : this.state.username,
        password : this.state.password
      }
      //must save to the database
      CreateUser.createUser(data)
        .then(respone => {
          respone.data.password = this.props.handleSignup({
            password: this.state.password
          });
          respone.data.username = this.props.handleSignup({
            password: this.state.password
          });
        });
    }else{
      alert('not match')
    }
    
  }

  bubleUpLogin() {
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password,
    });
  }

  bubleUpRecoverPassword() {
    this.props.handleRecoverPassword({
      username: this.state.username,
    });
  }

  bubleUpRecoverPassword() {
    this.props.handleRecoverPassword({
      username: this.state.username,
    });
  }

  render() {
    const styles = {
      wrapper: {
        border: '1px solid #eee',
        borderRadius: 20,
        backgroundColor: '#FAFAFA',
        margin: 10,
        padding: 20,
        maxWidth: '600px',

        width: 500,
        height: 400,
        perspective: 1000,
      },
      title: {
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
      },
      flipper: {
        transition: '0.4s',
        transformStyle: 'preserve-3d',
        position: 'relative',
        transform: `rotateY(${!this.state.isLogin || this.state.isRecoveringPassword
          ? '180'
          : '0'}deg)`,
      },
    };
    const showCard = () => {
      if (this.state.isLogin && !this.state.isRecoveringPassword) {
        return (
          <Login
            key="login-form"
            handleShowSignup={this.updateState}
            handleShowRecover={this.updateState}
            styles={this.props.styles.login}
            handleLogin={this.bubleUpLogin}
            handleChange={this.updateState}
            username={this.state.username}
            password={this.state.password}
            usernameCustomLabel={this.props.usernameCustomLabel}
            passwordCustomLabel={this.props.passwordCustomLabel}
            recoverPasswordCustomLabel={this.props.recoverPasswordCustomLabel}
            goToSignupCustomLabel={this.props.goToSignupCustomLabel}
            submitLoginCustomLabel={this.props.submitLoginCustomLabel}
          />
        );
      } else if (!this.state.isLogin && !this.state.isRecoveringPassword) {
        return (
          <Signup
            key="signup-form"
            handleShowLogin={this.updateState}
            styles={this.props.styles.signup}
            handleSignup={this.bubleUpSignup}
            handleChange={this.updateState}
            username={this.state.username}
            password={this.state.password}
            passwordConfirmation={this.state.passwordConfirmation}
            usernameCustomLabel={this.props.usernameCustomLabel}
            passwordCustomLabel={this.props.passwordCustomLabel}
            passwordConfirmationCustomLabel={this.props.passwordConfirmationCustomLabel}
            goToLoginCustomLabel={this.props.goToLoginCustomLabel}
            submitSignupCustomLabel={this.props.submitSignupCustomLabel}
          />
        );
      }
      return (
        <RecoverPassword
          handleShowLogin={this.updateState}
          handleRecoverPassword={this.bubleUpRecoverPassword}
          handleChange={this.updateState}
          styles={this.props.styles.recoverPassword}
          username={this.state.username}
          usernameCustomLabel={this.props.usernameCustomLabel}
          goToLoginCustomLabel={this.props.goToLoginCustomLabel}
          submitRecoverPasswordCustomLabel={this.props.submitRecoverPasswordCustomLabel}
        />
        
      );
    };
    return (
      <section
        id="main-wrapper"
        style={Object.assign(styles.wrapper, this.props.styles.mainWrapper)}
      >
        <center>
        <img src={this.props.logo} alt='logo' style={{width: "240px"}}/>
        </center>
          {/* {this.props.title} */}
          <div style={Object.assign(styles.flipper, this.props.styles.flipper)}>{showCard()}</div>
      </section>
    );
  }
}



ReactSignupLoginComponent.propTypes = {
  title: PropTypes.string,
  isLogin: PropTypes.bool,
  isRecoveringPassword: PropTypes.bool,
  styles: PropTypes.shape({
    mainWrapper: PropTypes.object,
    mainTitle: PropTypes.object,
    flipper: PropTypes.object,
    signup: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPassword: PropTypes.object,
      button: PropTypes.object,
    }),
    login: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPasswordWrapper: PropTypes.object,
      recoverPasswordButton: PropTypes.object,
      button: PropTypes.object,
    }),
    recoverPassword: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      button: PropTypes.object,
    }),
  }),
  handleSignup: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRecoverPassword: PropTypes.func.isRequired,
  usernameCustomLabel: PropTypes.string,
  passwordCustomLabel: PropTypes.string,
  passwordConfirmationCustomLabel: PropTypes.string,
  recoverPasswordCustomLabel: PropTypes.string,
  goToSignupCustomLabel: PropTypes.string,
  submitLoginCustomLabel: PropTypes.string,
  goToLoginCustomLabel: PropTypes.string,
  submitSignupCustomLabel: PropTypes.string,
  submitRecoverPasswordCustomLabel: PropTypes.string,
};

ReactSignupLoginComponent.defaultProps = {
  title: 'tripFUNd',
  isLogin: true,
  isRecoveringPassword: false,
  styles: {},
  usernameCustomLabel: 'Username',
  passwordCustomLabel: 'Password',
  passwordConfirmationCustomLabel: 'Confirm password',
  recoverPasswordCustomLabel: 'Recover Password',
  goToSignupCustomLabel: 'Signup',
  goToLoginCustomLabel: 'Login',
  submitLoginCustomLabel: 'Signup',
  submitSignupCustomLabel: 'Signup',
  submitRecoverPasswordCustomLabel: 'Recover',
};

export default ReactSignupLoginComponent;
