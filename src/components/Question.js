import React from "react";
import Option from '../components/Option';
import '../styles/question.css';

const Question = (props) => {
	let options = props.options.map((option, i) => { 
		return (
			<Option
			 	questionId={props.id}
				id={option.id}
				content={option.content}
				key={option.id}
				categoryId={props.categoryId}
				onChooseOption={props.onChooseOption}/>
		)                 
	});

    return(
        <div className="question" data-id={props.id}>
        	<p>{props.eq}. {props.content}</p>
        	<div className="options">
        		{options}
        	</div>
        </div>
    )
}

export default Question;
