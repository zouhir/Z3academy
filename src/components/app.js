import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './pages/home';
import Course from './pages/course';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Course path="/course/" />
					<SignIn path="/signin/" />
					<SignUp path="/signup/" />
				</Router>
			</div>
		);
	}
}
