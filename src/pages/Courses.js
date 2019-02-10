import React, { Component } from 'react';
import Course from '../components/Course';
import '../styles/courses.css';

class Courses extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		}
	}

	componentDidMount(){
		fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/courses.json")
			.then(response => {
				return response.json();
			})
			.then(result => {
				this.setState({data:result.data}, () => {
					//window.setTimeout(function () {
						document.querySelector(".courses").classList.remove('none');
						document.querySelector(".courses").classList.add('tVisible');
					//}, 500);
				});
			});
	}

	render() {
		let courses = (!this.state.data) 
			? null //<div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Loading')} &middot;&middot;&middot;</div>
			: this.state.data.map((course, i) => {   
				return (
					<Course 
						title={course.title}
						status={course.status}
						items={course.items}
						content={course.content}
						link={course.link}
						key={i}
						lang={this.props.lang}
						ts={this.props.ts}/>
				)                 
			});

		return (
			<div className="courses page none">
				{courses}
			</div>
		);
	}
}

export default Courses;
