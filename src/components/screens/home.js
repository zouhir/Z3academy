import { h, Component } from 'preact'

import Hero from '../../components/hero'
import CourseTile from '../course-tile'
import NavHome from '../../components/nav-home'
import courses from '../../_DATA/courses.json'

export default class Home extends Component {
  render () {
    return (
      <div class={this.props.nav ? 'page toggle' : 'page'}>
        <NavHome />
        <section class='home'>
          <Hero toggleNav={this.props.toggleNav} />
          <div class='courseWrapper'>
            <CourseTile {...courses.data[0]} />
            <CourseTile {...courses.data[0]} />
            <CourseTile {...courses.data[0]} />
          </div>
        </section>
      </div>
    )
  }
}
