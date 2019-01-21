import React, { Component } from "react"
import { Link } from "react-router-dom";
import '../styles/hamburger.css';

class Hamburger extends Component {
	constructor() {
		super();

		this.state = {
			className: "",
			linkTo: "/"
		}
	}

	componentDidMount() {
		this.onRouteChanged(this.props.location.pathname)
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.onRouteChanged(this.props.location.pathname)
		}
	}

	onRouteChanged(pathname) {
		let className = "cross";
		let linkTo = "/";
		let pathnames = pathname.split("/");

		if (pathname === "/") {
			className = "";
			linkTo = "/menu";
		} else if (pathnames.length === 4)  {
			linkTo = "/"+pathnames["1"]+"/"+pathnames["2"];
			className = "back"
		}

		this.setState({className, linkTo});
	}

    render() {
		return (
			<Link to={this.state.linkTo} className={this.state.className + " hamburger"}>
				<div></div>
				<div></div>
				<div></div>
			</Link>
		)
	}
}

export default Hamburger;