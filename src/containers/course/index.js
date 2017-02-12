import { h, Component } from 'preact'
import style from './style'

import NavSchool from '../../components/nav-school'

export default class Course extends Component {
  render () {
    const info = this.props.courseInfo
    return (
      <div class={this.props.nav ? 'page toggle' : 'page'}>
        <NavSchool />
        <div class={style.course}>
          <div class={style.topics}>
            <h1>{info.title}</h1>
          </div>
          <div class={style.player}>
            <div class={style.youtube}>
              <div class={style.content}>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
    frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
