import classNames from "classnames";
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
						<li className={classNames(response.type)}> {response.message}</li>
					</div>
				);
			})}
		</ul>
	);
}

export default ResponsesList;
