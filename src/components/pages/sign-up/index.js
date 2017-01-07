import { h, Component } from 'preact'
import style from './style'

import Master from '../master'

import Form from '../../signup-form'

export default class SignIn extends Component {
  render () {
    return (
      <Master title="Sign Up">
        {/* signup form */}
        <Form />
      </Master>
    )
  }
}
