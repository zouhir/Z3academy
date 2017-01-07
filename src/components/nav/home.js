import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './home.scss'

export default class NavHome extends Component {
  render ({navOpen, toggleNav}) {
    const navStatus = this.props.navOpen ? style.open : style.close
    return (
      <div class={`${style.sidebar} ${navStatus}`}>
        {/* main site navigation */}
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
          {/* login / signup *buttons ONLY* visible on *mobile ONLY*  */}
          <Link href='#' class={style.btnMain}>Sign UP</Link>
          <Link href='#' class={style.btnDefault}>Sign in</Link>
        </nav>
        {/* login / signup widget hidden on mobile */}
        <div class={style.widget}>
          <Link href='/signup' class={style.btnMain}>Sign UP</Link>
          <Link href='/signin' class={style.btnDefault}>Sign in</Link>
        </div>
        {/* close  */}
        <a class={style.close} onClick={() => this.props.toggleNav(false)}>
          <img src='/assets/img/close.svg' />
        </a>
      </div>
    )
  }
}
