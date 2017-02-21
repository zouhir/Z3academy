import { h, Component } from 'preact';
import { Link } from 'preact-router';

import { main } from '../_DATA/menus.json';

import * as Icons from './icons';

export default class NavSecondary extends Component {
  render() {
    return (
      <nav class="altNav expand">
        <Link href="/" class="logo">
          <img src="/assets/img/logo-white.svg" alt="Z3 Academy Logo" />
        </Link>
        <Link class="menu">
          <Icons.home fill="#FFF" />
        </Link>
        <Link class="menu">
          <Icons.course fill="#FFF" />
        </Link>
        <Link class="menu">
          <Icons.tutorial fill="#FFF" />
        </Link>

        <button class="altBurger" onClick={() => this.props.toggleNav()}>
          <Icons.hamburger />
        </button>
      </nav>
    );
  }
}
