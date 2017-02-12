import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

import { main } from '../../_DATA/menus.json'

export default class NavSecondary extends Component {
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
        <nav class={style.altNav}>
          <Link href='/' class={style.logo + ' ' + style.hideXs}>
            <img src='/assets/img/logo-white.svg' />
          </Link>
          {
            main.map((item) => (
              <Link href={item.link}>{item.title}</Link>
            ))
          }
        </nav>
      </div>
    )
  }
}
