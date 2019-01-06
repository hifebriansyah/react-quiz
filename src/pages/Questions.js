import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import Question from '../components/Question';
import '../styles/questions.css';

class Questions extends Component {
	constructor() {
		super();

		this.state = {
			data: [],
			questions: [],
			selections:{},
			position: 0
		}
	}

	componentDidMount(){
		fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw")
			.then(response => {
				return response.json();
			})
			.then(result => {
				let data = result.data;

				this.shuffleArray(data);

				let questions = data.map((question, i) => {
					return (
						<Question
							eq={i+1}
							key={question.id}
							id={question.id}
							content={question.content}
							options={question.options}
							categoryId={question.category.id}
							onChooseOption={(questionId, optionId, categoryId) => this.onChooseOption(questionId, optionId, categoryId)}/>
					)                 
				});

				this.setState({questions, data});
				this.renderQuestion();
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

	onChooseOption(questionId, optionId, categoryId) {
		let selections = this.state.selections;

		selections[questionId] = [optionId];

		if(categoryId === 2) {
			var checked = document.querySelectorAll('[name=option'+questionId+']:checked');
		    selections[questionId] = Array.prototype.map.call(checked, function (e) {return e.value;});

			if(!selections[questionId].length){
				delete selections[questionId]
			}
		}

		this.setState({selections}, () => {
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
		let selections = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(this.state.selections), 'selections'));
		let questions = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(this.state.data), 'questions'));
		window.location.replace("http://localhost:3000/result.html?selections=" + selections + "&questions=" +  questions);
	}

	render() {
		return (
			<div className="questions"> 
				{this.state.questions}
				<div className="clear">
	        		<div className="previous" onClick={() => this.onNavigate(0)}>previous</div>
	        		<div className="next" onClick={() => this.onNavigate(1)}>next</div>
        		</div>
        		<div className="finish" onClick={() => this.onFinish()}>finish</div>
			</div>
		);
	}
}

export default Questions;
