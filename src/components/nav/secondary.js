import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './secondary.scss'

export default class NavSecondary extends Component {
  state = {
    navOpen: false
  }
  toggleNav = (newState) => {
    console.log('heeeeeeeeeeeeey')
    this.setState({
      navOpen: newState
    })
  }
  render () {
    const navStatus = this.state.navOpen ? style.open : style.close

    return (
      <div>
        <div class={style.altNav}>
          <Link href='/' class={style.logo + ' ' + style.hideXs}>
            <img src='/assets/img/logo-white.svg' />
          </Link>

          <a class={style.showXs} onclick={() => (this.toggleNav(true))}>
            <img src='/assets/img/mobile-menu.svg' />
          </a>

          <Link class={style.hideXs}>
            <img src='/assets/img/home.svg' />
          </Link>
        </div>

        <div class={`${style.mobileAltNav} ${navStatus}`}>
          <nav>
            <ul>
              <li>
                <Link class={style.active} href='/'>Home</Link>
              </li>
              <li>
                <Link href='#'>Courses</Link>
              </li>
              <li>
                <Link href='#'>Writings</Link>
              </li>
              <li>
                <Link href='#'>About Us</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* close  */}
          <a class={style.close} onclick={() => (this.toggleNav(false))}>
            <img src='/assets/img/close.svg' />
          </a>
        </div>

      </div>
    )
  }
}
