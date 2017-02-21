import { h, Component } from 'preact'
import { Router } from 'preact-router'

import * as Screens from './screens'
import NavMobie from './nav-mobile'
import { data } from '../_DATA/courses.json'

export default class App extends Component {
  state = {
    nav: false
  }
  toggleNav = () => {
    let currentState = this.state.nav
    if (currentState === true) {
      document.body.className = ''
    } else {
      document.body.className = 'no-scroll'
    }
    this.setState({
      nav: !currentState
    })
  }
  /** Gets fired when the route changes.
   * @param {Object} event "change" event from [preact-router](http://git.io/preact-router)
   * @param {string} event.url The newly routed URL
  */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id='app'>
        <NavMobie toggleNav={this.toggleNav} />
        <Router onChange={this.handleRoute}>
          <Screens.home path='/' nav={this.state.nav} toggleNav={this.toggleNav} />
          <Screens.course path={`/course/:name`} courseInfo={data[0]} nav={this.state.nav} toggleNav={this.toggleNav} />
          <Screens.signup path={`/signup`} />
        </Router>
      </div>
    )
  }
}
