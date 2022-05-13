import classNames from "classnames";
import React from "react";
import Loading from "./Loading";
import "./styles/ResponsesList.scss";

function ResponsesList(props) {
	const { responses, loading } = props;
	console.log("responses", responses);
	return (
		<ul id="messages">
			{responses.map(response => {
				return (
					<li className={classNames(response.type)}> {response.message}</li>
				);
			})}
			{loading && <Loading></Loading>}
		</ul>
	);
}

export default ResponsesList;
