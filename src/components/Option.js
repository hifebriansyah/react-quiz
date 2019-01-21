import React from "react"
import '../styles/option.css';

const Option = (props) => {
	let type =  (props.category === 1) ? "radio" : "checkbox";

	let selectionClass = (!props.validate)
		? ""
		: (props.answer === props.selection && props.selection === true)
			? "true"
			: (props.answer !== props.selection && props.selection === true)
				? "false"
				: (props.answer !== props.selection && props.selection === false)
					? "miss"
					: "";


	let alphabet = String.fromCharCode(65+props.i) + ")";

    return(
	    <label className={selectionClass + " option shadow"}>
	        <input
	        	name={"option"+props.questionId}
	        	value={props.id}
	        	type={type}
	        	onClick={() => props.onChooseOption(props.questionId, props.id, props.category, props.i)} />
	        <div><span>{alphabet}</span> {props.ts(props.content)}</div>
		</label>
    )
}

export default Option;
