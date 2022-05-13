import React from "react";

function ResponsesList(props) {
	const { responses } = props;
	console.log("responses", responses);
	return (
		<ul>
			{responses.map(response => {
				return (
					<li>
						<p>{response}</p>
					</li>
				);
			})}
		</ul>
	);
}

export default ResponsesList;
