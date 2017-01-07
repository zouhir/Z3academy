import { h, Component } from 'preact'
import style from './style'

import Hero from '../../hero'
import CourseTile from '../../course-tile'
import { NavHome } from '../../nav'

export default class Home extends Component {
  state = {
    navOpen: false
  }
  toggleNav = (newState) => {
    this.setState({
      navOpen: newState
    })
  }
  render () {
    return (
      <div>
        <NavHome toggleNav={this.toggleNav} navOpen={this.state.navOpen} />
        <Hero toggleNav={this.toggleNav} navOpen={this.state.navOpen} />
        <div class={style.courses}>
          <CourseTile />
          <CourseTile />
          <CourseTile />
          <CourseTile />
          <CourseTile />
        </div>
      </div>
    )
  }
}
