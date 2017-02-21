import { h, Component } from 'preact';

export default class Hamburger extends Component {
  static defaultProps = {
    fill: '#6A6F7B'
  };
  render(props) {
    let { fill } = props;
    return (
      <svg
        width="32"
        height="25"
        viewBox="24 71 32 25"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 93h32v3H24v-3zm0-11h22v3H24v-3zm0-11h32v3H24v-3z"
          fill={fill}
          fill-rule="evenodd"
        />
      </svg>
    );
  }
}
