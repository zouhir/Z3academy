import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class SignupForm extends Component {
  render () {
    return (
      <div class={style.signup}>
        <h3>Sign in to Z3Academy</h3>

        <a href='' class={style.btnGoogle}>Continue using Google</a>
        <a href='' class={style.btnFacebook}>Continue using Facebook</a>
        <hr />
        <input type='text' placeholder='Email address' />
        <input type='password' placeholder='Password' />
        <div class={style.wrapper}>
          <a href='' class={style.btnSignup}>Sign in</a>
          <a class={style.formFooter}>Forgot your password</a>
          <a class={style.formFooter}>I don't have an account</a>
        </div>
      </div>
    )
  }
}
