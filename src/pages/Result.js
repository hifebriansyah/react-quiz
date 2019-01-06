import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import '../styles/result.css';

class Result extends Component {
	constructor() {
		super();
		this.state = {
			result: null
		}
	}

	componentDidMount(){
		try {
			const urlParams = new URLSearchParams(window.location.search);
			let result = JSON.parse(CryptoJS.AES.decrypt(decodeURIComponent(urlParams.get('result')), 'result').toString(CryptoJS.enc.Utf8));
			console.log(result);
	    } catch (e) {}

	}

	render() {
		return (
			<div className="result">
			</div>
		);
	}
}

export default Result;
