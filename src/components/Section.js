import React from 'react';
import { Link } from "react-router-dom";
import '../styles/section.css';

const Section = (props) => {
	let chapters = props.chapters.map((chapter, i) => {     
		return (
			<Link key={i} to={"/courses/"+props.section+"/"+chapter.link['en']} className="chapter clear">
				<div className="name">{props.ts(chapter.title)}</div>
				<div className="arrow"></div>
			</Link>
		)                 
	})

    return(
        <div className="section shadow">
        	<div className="top" style={{backgroundImage:'linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/'+ props.section.toLowerCase() +'.jpeg)'}}>
				<div>
					<h1>{props.ts(props.title)}</h1>
					<p>{props.ts(props.type)}</p>
				</div>
			</div>
    		<div className="chapters">
    			{chapters}
    		</div>
    	</div>
    )
}

export default Section;