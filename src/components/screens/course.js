import { h, Component } from 'preact'

import NavSchool from '../nav-school'
import LessonsList from '../lessons-list'

export default class Course extends Component {
  render (props) {
    return (
      <div class={this.props.nav ? 'page toggle' : 'page'}>
        <NavSchool {...props} />
        <LessonsList />
        <div class='player'>
          <div class='youtube'>
            <div class='content' />
          </div>
        </div>
      </div>
    )
  }
}
