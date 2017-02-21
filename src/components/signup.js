import { h, Component } from 'preact'

export default class SignupForm extends Component {
  render () {
    return (
      <div class='signup'>
        <h3>Create a free Z3Academy account</h3>
        <p>
          You can easily sign up to Z3Academy using your favourite social network account
          or simply by using your email in the form below.
        </p>
        <a href='' class='btn btnGoogle'>Sign up using Google</a>
        <a href='' class='btn btnFacebook'>Sign up using Facebook</a>
        <hr />
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Email address' />
        <input type='password' placeholder='Password' />
        <p class='note'>I agree to Z3Academy <a>Terms</a> and <a>Conditions</a></p>
        <div class='wrapper'>
          <a href='' class='btn btnSignup'>Sign up</a>
          <a class='formFooter'>Forgot your password</a>
          <a class='formFooter'>Go to Sign in page</a>
        </div>
      </div>
    )
  }
}
