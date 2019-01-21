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
		fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/sections-"+this.props.match.params.section.toLowerCase()+".json")
			.then(response => {
				if (!response.ok) { throw response }
				return response.json();
			})
			.then(result => {
				this.setState({data:result.data}, () => {
					this.onTypeToggle(null, 1);
					document.querySelector(".type-toggle").classList.add('block');
					this.props.setCutter('medium');
				});
			})
			.catch( err => {
				this.setState({data:false});
				//console.warn(err);
			});
	}

	onTypeToggle(e, active_type) {
		document.querySelectorAll(".section").forEach(element => {
			element.classList.remove("block")
			element.classList.add("none")
		});

		document.querySelectorAll(".section.type-" + active_type).forEach(element => {
			element.classList.remove("none")
			element.classList.add("block")
		});

		let sectionBlocks = document.querySelectorAll(".section.block");

		if(sectionBlocks[0]) {
			sectionBlocks[0].classList.add("first");
			sectionBlocks[sectionBlocks.length-1].classList.add("last");
		}

		if(e) {
			document.querySelectorAll(".type-toggle > div").forEach(element => {
				element.classList.remove("active")
			});

			e.target.classList.add('active')
			e.target.parentNode.classList.remove("type-1", "type-2", "type-3")
			e.target.parentNode.classList.add("type-"+active_type);
		};
	}

	render() {
		let sections = (this.state.data === null)
			? <div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Loading')} &middot;&middot;&middot;</div>
			: (this.state.data === false)
				? <div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Under Development')} &middot;&middot;&middot;</div>
				: this.state.data.map((section, i) => {
					return (
						<Section 
							ts={this.props.ts}
							title={section.title}
							key={i}
							type={section.type}
							chapters={section.chapters}
							section={this.props.match.params.section} />
					)                 
				});

	    return(
	        <div className="sections page">
	        	<div className="type-toggle clear type-1">
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 1)} className="active">{this.props.ts('Exams')}</div>
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 2)}>{this.props.ts('Lessons')}</div>
	        		<div onClick={(e, active_type) => this.onTypeToggle(e, 3)}>{this.props.ts('Videos')}</div>
	        	</div>
	        	<div>{sections}</div>
	        </div>
	    )
	}
}

export default Sections;