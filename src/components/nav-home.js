import { h, Component } from 'preact'
import { Link } from 'preact-router'
import { main } from '../_DATA/menus.json'

export default class NavHome extends Component {
  render () {
    return (
      <div class='sidebar'>
        {/* main site navigation */}
        <nav>
          <ul>
            {
              main.map((item, i) => (
                <li>
                  <Link class={i === 0 ? 'active' : ''} href={item.link}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        {/* login / signup widget hidden on mobile */ }
        <div class='widget'>
          <Link href='/signup' class='btnMain'>Sign UP</Link>
          <Link href='/signin' class='btnDefault'>Sign in</Link>
        </div>
      </div>
    )
  }
}
