import React from "react";

function ResponsesList(props) {
	const { responses } = props;
	return (
		<ul>
			{responses.map(response => {
				<li>
					<p>{response}</p>
				</li>;
			})}
		</ul>
	);
}

export default ResponsesList;
