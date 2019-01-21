import React, { Component } from "react"

class Cutter extends Component {
	componentDidMount() {
		this.onRouteChanged(this.props.location.pathname)
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.onRouteChanged(this.props.location.pathname)
		}
	}

	onRouteChanged(pathname) {
		let className = "flat";

		if (pathname === "/") {
			className = "diagonal";
		} else if (pathname === "/menu")  {
			className = "full"
		}

		this.props.setCutter(className);
	}

    render() {
		return (
			<div className={this.props.cutter + " cutter"}></div>
		)
	}
}

export default Cutter;