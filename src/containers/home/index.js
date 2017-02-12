import { h, Component } from 'preact'
import style from './style.scss'

import Hero from '../../components/hero'
import CourseTile from '../../components/course-tile'
import NavHome from '../../components/nav-home'
import courses from '../../_DATA/courses.json'

export default class Home extends Component {
  render () {
    return (
      <div class={this.props.nav ? 'page toggle' : 'page'}>
        <NavHome />
        <section class={style.home}>
          <Hero toggleNav={this.props.toggleNav} />
          <div class={style.courses}>
            <CourseTile {...courses.data[0]} />
          </div>
        </section>
      </div>
    )
  }
}
