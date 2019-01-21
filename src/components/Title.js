import React, { Component } from "react"
import '../styles/title.css';

class Title extends Component {
	constructor() {
		super();

		this.state = {
			title: ""
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
		var title = 'Scrum.id';
		let pathnames = pathname.split("/");

		if (pathname.indexOf('questions') !== -1) {
			title = "Exam";
		} else if (pathnames.length >= 3)  {
			title = pathnames["2"].replace(/-/gi, " ");
		}

		this.setState({title});
	}

    render() {
		return (
			<div className="title">{this.state.title}</div>
		)
	}
}

export default Title;