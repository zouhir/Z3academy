import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class SignupForm extends Component {
  render () {
    return (
      <div class={style.signup}>
        <h3>Create a free Z3Academy account</h3>
        <p>
          You can easily sign up to Z3Academy using your favourite social network account
          or simply by using your email in the form below.
        </p>
        <a href='' class={style.btnGoogle}>Sign up using Google</a>
        <a href='' class={style.btnFacebook}>Sign up using Facebook</a>
        <hr />
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Email address' />
        <input type='password' placeholder='Password' />
        <p class={style.note}>I agree to Z3Academy <a>Terms</a> and <a>Conditions</a></p>
        <div class={style.wrapper}>
          <a href='' class={style.btnSignup}>Sign up</a>
          <a class={style.formFooter}>Forgot your password</a>
          <a class={style.formFooter}>Go to Sign in page</a>
        </div>
      </div>
    )
  }
}
