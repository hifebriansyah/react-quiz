import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './pages/Menu';
import Questions from './pages/Questions';
import Result from './pages/Result';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const AppRouter = () => (
	<Router>
		<div className="container">
			<div className="cutter"></div>
			<nav>
				<ul>
					<li><Link to="/">Menu</Link></li>
				</ul>
			</nav>
			<Switch>
				<Route path="/" exact component={Menu} />
				<Route path="/result" component={Result} />
				<Route path="/questions/:id" component={Questions} />
			</Switch>
		</div>
	</Router>
);


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
