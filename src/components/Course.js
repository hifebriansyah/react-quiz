import React from "react";
import '../styles/course.css';
import { Link } from "react-router-dom";

const Course = (props) => {
	let btnClass = (1) ? 'blue' : 'grey';
	let btnLabel = (1) ? props.ts('Let\'s go!') : props.ts('Coming Later!');

	let item = props.items.map((item, i) => {
		let priceClass = (item.status < 3) ? 'green' : 'red';
		
		return (
			<tr key={i}>
				<td>{item.total}</td>
				<td>{props.ts(item.title)}</td>
				<td className={priceClass}>{props.ts(item.price)}</td>
			</tr>
		)                 
	});

    return(
		<div className="course shadow">
			<div className="top shadow" style={{backgroundImage:'linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/'+props.link['en'].toLowerCase()+'.jpeg)'}}>
				<div>
					<h1>{props.ts(props.title)}</h1>
					<p>{props.ts(props.content)}</p>
				</div>
			</div>
			<div className="bottom">
				<span>{props.ts('This module includes')}</span>  :
				<table>
					<tbody>
						{item}
					</tbody>
				</table>
				<Link to={"/courses/"+props.ts(props.link)} className={btnClass +" btn shadow"}>{btnLabel}</Link>
			</div>
		</div>
    )
}

export default Course;
