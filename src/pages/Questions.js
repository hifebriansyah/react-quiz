import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import Question from '../components/Question';
import { Link } from "react-router-dom";
import '../styles/questions.css';

class Questions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			questions: null,
			selections:{},
			position: 0
		}
	}

	componentDidMount(){
		fetch(this.props.config.api.path + "/questions_"+this.props.match.params.section.toLowerCase()+"_"+this.props.match.params.id.toLowerCase())
			.then(response => {
				if (!response.ok) { throw response }
				return response.text();
			})
			.then(result => {
				result = JSON.parse(atob(result));
				let data = result.data;
				this.shuffleArray(data);
				data = data.slice(0, 20);

				let questions = data.map((question, i) => {
					return (
						<Question
							ts={this.props.ts}
							key={i}
							id={question.id}
							content={question.content}
							options={question.options}
							category={question.category}
							onChooseOption={(questionId, optionId, category, index) => this.onChooseOption(questionId, optionId, category, index)}/>
					)                 
				});

				this.setState({questions, data});
				this.renderQuestion();
				document.querySelector(".nav").style.display = 'block';

				this.setState({data}, () => {
					//window.setTimeout(function () {
						document.querySelector(".questions").classList.remove('none');
						document.querySelector(".questions").classList.add('tVisible');
					//}, 500);
				});
			})
			.catch( err => {
				this.setState({questions:false});
				//console.warn(err);
			});
	}

	shuffleArray(array) {
	    for (let i = array.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [array[i], array[j]] = [array[j], array[i]];
	    }
	}

	onNavigate(count) {
		let position = (count && (this.state.position < this.state.questions.length - 1))
			? this.state.position + 1
			: (!count && this.state.position > 0)
				? this.state.position - 1
				: this.state.position

		this.setState({position}, () => {
		    this.renderQuestion();
		});
	}

	onChooseOption(questionId, optionId, category, index) {
		let selections = this.state.selections;
		let options = this.state.data[this.state.position]['options'];

		if(category === 1) {
			for (let i = 0; i < options.length; i++) {
				options[i].selection = (i === index);
			}

			selections[questionId] = [optionId];
		} else if(category === 2) {
			let checked = document.querySelectorAll('[name=option'+questionId+']:checked');
		    selections[questionId] = Array.prototype.map.call(checked, function (e) {return e.value;});

			for (let i = 0; i < options.length; i++) {
				options[i].selection = (selections[questionId].indexOf(options[i].id) !== -1);
			}

			if(!selections[questionId].length){
				delete selections[questionId]
			}
		}

		this.setState({selections}, () => {
			this.onFinish() 
			document.querySelector(".finish").style.display = (Object.keys(selections).length === this.state.questions.length) ? 'block' : 'none';
		});
	}

	renderQuestion() {
		let questions = document.querySelectorAll('.question');

		for (let i=0; i < questions.length; i++) {
		    questions[i].style.display = 'none';
		}

		let options = document.getElementsByClassName("question")[this.state.position].children[1];

		for (let i = options.children.length; i >= 0; i--) {
		    options.appendChild(options.children[Math.random() * i | 0]);
		}

		for (let i=0; i < options.children.length; i++) {
		     options.children[i].children[1].children[0].innerHTML = String.fromCharCode(65+i) + ")";
		}

		document.getElementsByClassName("question")[this.state.position].style.display = 'block';
		document.querySelector(".previous").style.display = (this.state.position !== 0) ? 'block' : 'none';
		document.querySelector(".next").style.display = (this.state.position !== this.state.questions.length - 1) ? 'block' : 'none';
	}

	onFinish() {
		let data = this.state.data;
		let correct;

		let result = {
			score : 0,
			questions : data,
			correct: 0,
			incorrect: 0,
			section:this.props.match.params.section
		};

		for (let i = 0; i < data.length; i++) {
			for (let x = 0; x < data[i]['options'].length; x++) {
				correct = (data[i]['options'][x].answer === data[i]['options'][x].selection)
				
				if(!correct) {
					result.incorrect++;
					break;
				}
			}
		}

		result.correct = data.length - result.incorrect;
		result.score = (result.correct / (data.length) * 100).toFixed(2).replace(/[.,]00$/, "");

		localStorage.setItem('result', CryptoJS.AES.encrypt(JSON.stringify(result), 'result'));
	}

	render() {
		let questions = (this.state.questions === null)
			? <div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Loading')} &middot;&middot;&middot;</div>
			: (this.state.questions === false)
				? <div className="message paper shadow center">&middot;&middot;&middot; {this.props.ts('Under Development')} &middot;&middot;&middot;</div>
				: this.state.questions

		let length = (this.state.questions) ? Object.keys(this.state.questions).length : 0;

		return (
			<div className="questions page none"> 
				{questions}
				<div className="clear nav">
	        		<div className="previous shadow btn" onClick={() => this.onNavigate(0)}>{this.props.ts('Previous')}</div>
	        		<div className="page-number">{this.state.position + 1} {this.props.ts('of')} {length}</div>
	        		<div className="next shadow btn" onClick={() => this.onNavigate(1)}>{this.props.ts('Next')}</div>
        		</div>
        		<Link className="finish shadow btn green" onClick={() => this.onFinish()} to="/result">{this.props.ts('Finish')}</Link>
			</div>
		);
	}
}

export default Questions;
