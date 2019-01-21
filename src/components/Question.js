import React from "react";
import Option from '../components/Option';
import '../styles/question.css';

const Question = (props) => {
	let options = props.options.map((option, i) => { 
		return (
			<Option
				validate={props.validate}
				ts={props.ts}
			 	questionId={props.id}
				id={option.id}
				content={option.content}
				key={option.id}
				i={i}
				selection={option.selection}
				answer={option.answer}
				category={props.category}
				onChooseOption={props.onChooseOption}/>
		)                 
	});

	let feedback = (props.feedback)
		? <div className="feedback shadow"><span className='label'>{props.ts('Feedback')}</span><p>{props.ts(props.feedback)}</p></div>
		: '';

	let questionLabel = (props.feedback) ? <span className='label'>{props.i+1}. {props.ts('Question')} </span> : '';

    return(
        <div className="question" data-id={props.id}>
        	<div className="content shadow">
        		{questionLabel}
        		<p>{props.ts(props.content)}</p>
        	</div>
        	<div className="options">
        		{options}
        	</div>
        	{feedback}
        </div>
    )
}

export default Question;
