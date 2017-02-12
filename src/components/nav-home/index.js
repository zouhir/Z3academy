import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './style'
import { main } from '../../_DATA/menus.json'

export default class NavHome extends Component {
  render () {
    return (
      <div class={style.sidebar}>
        {/* main site navigation */}
        <nav>
          <ul>
            {
              main.map((item, i) => (
                <li>
                  <Link class={i === 0 ? style.active : ''} href={item.link}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        {/* login / signup widget hidden on mobile */ }
        <div class={style.widget}>
          <Link href='/signup' class={style.btnMain}>Sign UP</Link>
          <Link href='/signin' class={style.btnDefault}>Sign in</Link>
        </div>
      </div>
    )
  }
}
