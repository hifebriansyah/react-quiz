import React, { Component } from 'react';
import Exam from '../components/Exam';
import '../styles/menu.css';

class Menu extends Component {
	constructor() {
		super();
		this.state = {
			exams: []
		}
	}

	componentDidMount(){
		fetch("https://gist.githubusercontent.com/hifebriansyah/3aed8358fc634ff6f1b5d1ae52ec1dc4/raw")
			.then(response => {
				return response.json();
			})
			.then(result => {
				let exams = result.data.map((exam, i) => {     
					return (
						<Exam 
							name={exam.name}
							id={exam.id}
							key={exam.id}/>
					)                 
				});

				this.setState({exams})
			});
	}

	render() {
		return (
			<div className="menu">
				{this.state.exams}
			</div>
		);
	}
}

export default Menu;
