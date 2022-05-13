import React from "react";
import "./styles/ResponsesList.scss";

function ResponsesList(props) {
	const { responses } = props;
	console.log("responses", responses);
	return (
		<ul>
			{responses.map(response => {
				return (
					<div id="messages">
						<li className="prompt">prompt: {response.prompt}</li>

						<li className="response">response: {response.completed}</li>
					</div>
				);
			})}
		</ul>
	);
}

export default ResponsesList;
