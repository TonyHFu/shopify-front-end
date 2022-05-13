import classNames from "classnames";
import React from "react";
import Loading from "./Loading";
import "./styles/ResponsesList.scss";

function ResponsesList(props) {
	const { responses, loading } = props;
	return (
		<ul id="messages">
			{responses.map((response, i) => {
				return (
					<li key={i} className={classNames(response.type)}>
						{" "}
						{response.message}
					</li>
				);
			})}
			{loading && <Loading></Loading>}
		</ul>
	);
}

export default ResponsesList;
