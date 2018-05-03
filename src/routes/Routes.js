import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Mesa from '../Mesa';

export default class Routes extends Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={App} />
					<Route exact={true} path="/mesa" component={Mesa} />
				</div>
			</Router>
		)
	}
}