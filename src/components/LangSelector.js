import React from "react";
import '../styles/lang-selector.css';

const LangSelector = (props) => {
	var classList = props.loading ? 'none' : '';

    return(
		<div className={props.lang +" "+classList+ " lang-selector"} onClick={props.toggleLang}>
			<div></div>
			<div></div>
		</div>
    )
}

export default LangSelector;
