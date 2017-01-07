import { h, Component } from 'preact'
import style from './style'

import { NavSecondary } from '../../nav'

export default class Master extends Component {
  render () {
    return (
      <div class={style.masterContainer}>
        <div class={style.hero}></div>

        <div class={style.hTitle}>
          <h5>{this.props.title}</h5>
        </div>

        { this.props.children }

        {/* The left aligned navigation */}
        <NavSecondary />
      </div>
    )
  }
}
