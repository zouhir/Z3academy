import { h, Component } from 'preact'
import { Link } from 'preact-router'

export default class Hero extends Component {
  render () {
    return (
      <div class='hero'>
        {/* mobile only hero */}
        <div class='mheader'>
          <img src='/assets/img/logo-white.svg' class='logoM' alt='Z3 Academy Logo' />
          {/* 'hamburger' menu */}
          <a class='menueM left' onClick={() => this.props.toggleNav()}>
            <img src='/assets/img/mobile-menu.svg' alt='Z3 Acadeeemy Navigation' />
          </a>
        </div>
        <div class='content'>
          <img src='/assets/img/logo.svg' width='180' class='logo' alt='Z3 Academy Logo' />
          <p>Teaching Web Programming</p>
          <p class='note'>Our main motivation and focus is teaching refugees { <Link>learn more</Link> }</p>
        </div>
      </div>
    )
  }
}
