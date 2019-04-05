import React from "react";
import '../styles/loader.css';

const Loader = (props) => {
	var a = props.loading ? '' : 'none';
    return(
		<div className={"loader " + a}></div>
    )
}

export default Loader;
