import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h1> Sign in</h1>
        <p className='subtitle'>
          New user?{' '}
          <span>
            <Link className='option' to='/sign-up'>
              Create an Account
            </Link>
          </span>
        </p>
        <label className='outer-label'>Email address</label>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label className='outer-label'>Password</label>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='sign-in-button'>
            <CustomButton type='submit' value='Submit Form'>
              Sing In
            </CustomButton>
          </div>
          <hr className='rule-text' data-content='Or'></hr>
          <div className='out-auth-sign-in'>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sing In with Google
            </CustomButton>
            <CustomButton type='submit' isFacebookSignIn>
              Sing In with Facebook
            </CustomButton>
            <CustomButton type='submit' isAppleSignIn>
              Sing In with Apple
            </CustomButton>
          </div>
          <div className='terms'>
            <p>
              Protected by reCAPTCHA and subject to the Google Privacy Policy
              and Terms of Service.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
