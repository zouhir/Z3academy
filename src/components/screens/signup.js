import { h, Component } from 'preact'

import NavSchool from '../nav-school'
import Signup from '../signup'

export default class Course extends Component {
  render (props) {
    return (
      <div class={this.props.nav ? 'page toggle' : 'page'}>
        <NavSchool {...props} />
        <div class='player'>
          <Signup />
        </div>
      </div>
    )
  }
}
