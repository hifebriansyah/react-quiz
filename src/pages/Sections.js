import React, { Component } from 'react';
import Section from '../components/Section';
import '../styles/sections.css';

class Sections extends Component {
	constructor() {
		super();
		this.state = {
			data: null
		}
	}

	componentDidMount(){
		fetch(this.props.config.api.path + "/sections_" + this.props.match.params.section.toLowerCase())
			.then(response => {
				if (!response.ok) { throw response }
				return response.json();
			})
			.then(result => {
				this.setState({data:result.data}, () => {
					let self = this;
					self.props.setCutter('medium');

					//window.setTimeout(function () {
						document.querySelector(".type-toggle").classList.remove('none');
						document.querySelector(".type-toggle").classList.add('visible');
						self.onTypeToggle(null, 1);
					//}, 500);
				});
			})
			.catch( err => {
				this.setState({data:false});
				//console.warn(err);
			});
	}

	onTypeToggle(e, active_type) {
		document.querySelectorAll(".types").forEach(element => {
			element.classList.add("tHidden")
			element.classList.remove("tVisible")
		});

		document.querySelectorAll(".types-" + active_type).forEach(element => {
			element.classList.remove("none")
			element.classList.remove("tHidden")
			element.classList.add("tVisible")
		});

		if(e) {
			document.querySelectorAll(".type-toggle > div").forEach(element => {
				element.classList.remove("active")
			});

			e.target.classList.add('active')
			e.target.parentNode.classList.remove("type-1", "type-2", "type-3")
			e.target.parentNode.classList.add("type-"+active_type);
		};
	}

	renderSections(type) {
		return (
			<div className={"none types types-"+type}> 
				{this.state.data.map((section, i) => {
					if(type === section.type.id) return (
						<Section 
							ts={this.props.ts}
							title={section.title}
							key={i}
							type={section.type}
							chapters={section.chapters}
							section={this.props.match.params.section} />
					)

					return null;               
				})}
			</div>
		)
	}

	render() {
		let sections = (this.state.data === null)
			? null //<div className="center">&middot;&middot;&middot; {this.props.ts('Loading')} &middot;&middot;&middot;</div>
			: (this.state.data === false)
				? <div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Under Development')} &middot;&middot;&middot;</div>
				: (
					<div>
						{this.renderSections(1)}
						{this.renderSections(2)}
						{this.renderSections(3)}
					</div>
				);

	    return(
	        <div className="sections page">
	        	<div className="type-toggle clear type-1 none">
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 1)} className="active">{this.props.ts('Exams')}</div>
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 2)}>{this.props.ts('Lessons')}</div>
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 3)}>{this.props.ts('Videos')}</div>
	        	</div>
	        	{sections}
	        </div>
	    )
	}
}

export default Sections;