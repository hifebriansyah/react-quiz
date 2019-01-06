import React from "react"
import '../styles/option.css';

const Option = (props) => {
	let type =  (props.categoryId === 1) ? "radio" : "checkbox";

    return(
	    <label className="option">
	        <input
	        	name={"option"+props.questionId}
	        	value={props.id}
	        	type={type}
	        	onClick={() => props.onChooseOption(props.questionId, props.id, props.categoryId)} />
	        <div><span></span> {props.content}</div>
		</label>
    )
}

export default Option;
