import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'

export default class NavHome extends Component {
  render () {
    return (
      <div class={style.mobileNav}>
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
        </nav>
        {/* close  */}
        <a class={style.close} onClick={this.props.toggleNav}>
          <img src='/assets/img/close.svg' />
        </a>
      </div>
    )
  }
}
