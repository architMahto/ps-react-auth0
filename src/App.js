import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom' ;

import Header from './Components/Header';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</>
		);
	}
}

export default App;
