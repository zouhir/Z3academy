import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class NavHome extends Component {
  render() {
    return (
      <div class="mobileNav">
        {/* main site navigation */}
        <nav>
          <ul>
            <li>
              <Link class="active" href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Courses</Link>
            </li>
            <li>
              <Link href="#">Writings</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* close  */}
        <a class="close" onClick={this.props.toggleNav}>
          <img src="/assets/img/close.svg" alt="Close Z3 Academy Navigation" />
        </a>
      </div>
    );
  }
}
