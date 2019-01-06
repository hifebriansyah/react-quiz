import React from "react";
import '../styles/exam.css';
import { Link } from "react-router-dom";

const Exam = (props) => {
    return(
		<div className="exam">
			<div className="top">
				<h1>{props.name}</h1>
				<p>Professional Scrum Master I</p>
				<div></div>
				<div></div>
			</div>
			<div className="bottom">
				<span>This section includes</span>  :
				<table>
					<tr>
						<td>31</td>
						<td>Lessons</td>
						<td className="green">FREE</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Exam simulators</td>
						<td className="green">FREE</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Prep Course</td>
						<td className="red">SOON</td>
					</tr>
				</table>
				<Link to={"/questions/"+props.id} className="btn">Let's go!</Link>
			</div>
		</div>
    )
}

export default Exam;
