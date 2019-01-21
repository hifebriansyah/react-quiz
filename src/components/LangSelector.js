import React from "react";
import '../styles/lang-selector.css';

const LangSelector = (props) => {
    return(
		<div className={props.lang + " lang-selector"} onClick={props.toggleLang}>
			<div></div>
			<div></div>
		</div>
    )
}

export default LangSelector;
