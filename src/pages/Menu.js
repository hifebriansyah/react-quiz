import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';

class Menu extends Component {
	componentDidMount(){
		//window.setTimeout(function () {
			document.querySelector(".menu").classList.remove('none');
			document.querySelector(".menu").classList.add('tVisible');
		//}, 500);
	}

	render() {
	    return(
	        <div className="menu page none">
	            <Link to="/">{this.props.ts("Modules")}</Link>
	            <Link to="/">{this.props.ts("Articles")}</Link>
	            <Link to="/">{this.props.ts("About Us")}</Link>
	            <span>v1.0</span>
	        </div>
	    )
	}
}

export default Menu;