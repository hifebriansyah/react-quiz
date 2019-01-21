import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import '../styles/result.css';
import Question from '../components/Question';

class Result extends Component {
	constructor() {
		super();
		this.state = {
			result: null
		}
	}

	componentDidMount(){
		try {
			let result = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('result'), 'result').toString(CryptoJS.enc.Utf8));
			this.setState({result});
	    } catch (e) {}
	}

	render() {
		let result = this.state.result;
		let content = "please wait";
		
		if(result) {
			let questions = result.questions.map((question, i) => {
				return (
					<Question
						validate={true}
						ts={this.props.ts}
						key={i}
						id={i}
						i={i}
						content={question.content}
						options={question.options}
						feedback={question.feedback}
						categoryId={2}
						onChooseOption={() => {}}/>
				)                 
			});

			let message = (result.score >= 85)
				? this.props.ts("You passed the mock up exam") + " :)"
				: this.props.ts("You fail the mock up exam") + " :("

			let messageClass = (result.score >= 85) ? "green" : "red"

			content =
			<div>
				<div className="summary shadow">
					<div className="clear">
						<span>{this.props.ts("Module")}</span>
						<span>:</span>
						<span>{result.section}</span>
					</div>
					<div className="clear">
						<span>{this.props.ts("Points")}</span>
						<span>:</span>
						<span>{result.correct} {this.props.ts("of")} {result.correct + result.incorrect}</span>
					</div>
					<div className="clear">
						<span>{this.props.ts("Score")}</span>
						<span>:</span>
						<span>{result.score}%</span>
					</div>
					<div className={messageClass + " message"}>
						{message}
					</div>
				</div>
				<div>{questions}</div>
			</div>
		}

		return (
			<div className="result page">
				{content}
			</div>
		);
	}
}

export default Result;
