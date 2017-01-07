import { h, Component } from 'preact'
import style from './style'

import Master from '../master'
import Form from '../../signin-form'

export default class SignUp extends Component {
  render () {
    return (
      <Master title="Sign In">
        {/* signin form */}
        <Form />
      </Master>
    )
  }
}
