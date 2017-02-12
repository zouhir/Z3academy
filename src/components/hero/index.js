import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class Hero extends Component {
  render () {
    return (
      <div class={style.hero}>
        {/* mobile only hero */}
        <div class={style.mheader}>
          <img src='/assets/img/logo-white.svg' class={style.logoM} />
          {/* 'hamburger' menu */}
          <a class={`${style.menueM} ${style.left}`} onClick={() => this.props.toggleNav()}>
            <img src='/assets/img/mobile-menu.svg' />
          </a>
        </div>
        <div class={style.content}>
          <img src='/assets/img/logo.svg' width='180' class={style.logo} />
          <p>Teaching Web Programming</p>
          <p class={style.note}>Our main motivation and focus is teaching refugees { <Link>learn more</Link> }</p>
        </div>
      </div>
    )
  }
}
