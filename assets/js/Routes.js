import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const Routes = () => (
	<BrowserRouter>
		<div>
			<ul>
				{/*
				<li><Link to="/">Home</Link></li>
		    	<li><Link to="/about">About</Link></li>
		    	<li><Link to="/topics">Topics</Link></li>
				*/}
				<li><a href='/'>Home</a></li>
				<li><a href='/about'>About</a></li>
				<li><a href='/404'>404</a></li>
		    </ul>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/about' component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
)

const App = () => (
	 <div>
	 	<h2>App</h2>
	 </div>
)

const About = () => (
	 <div>
	 	<h2>About</h2>
	 </div>
)

const NotFound = () => (
	 <div>
	 	<h2>NotFound</h2>
	 </div>
)

export default Routes;
