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
		var self = this;
		this.props.setLoading(true);

		fetch(this.props.config.api.path + "/courses")
			.then(response => {
				return response.json();
			})
			.then(result => {
				this.setState({data:result.data}, () => {
					window.setTimeout(function () {
						self.props.setLoading(false);
						document.querySelector(".course-container").classList.remove('none');
						document.querySelector(".course-container").classList.add('tVisible');
					}, 0);
				});
			})
			.catch( err => {
				self.props.setCutter('flat');
				self.props.setLoading(false);
				document.querySelector(".courses .message").classList.remove('none');
				document.querySelector(".courses .message").classList.add('tVisible');
			});
	}

	render() {
		let courses = (!this.state.data) 
			? null
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
			<div className="courses page">
				<div className="message paper shadow center none">&middot;&middot;&middot; {this.props.ts('Under Development')} &middot;&middot;&middot;</div>
				<div className="course-container none">
					{courses}
				</div>
			</div>
		);
	}
}

export default Courses;
