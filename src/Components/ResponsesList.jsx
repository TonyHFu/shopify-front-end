import classNames from "classnames";
import React from "react";
import Loading from "./Loading";
import "./styles/ResponsesList.scss";

function ResponsesList(props) {
	const { responses, loading, bots, selectedBot } = props;

	const avatar = bots.filter(bot => bot.name === selectedBot)[0].avatar;
	return (
		<ul id="messages">
			{responses.map((response, i) => {
				return (
					<li key={i} className={classNames(response.type)}>
						{response.type === "response" && (
							<img className="message-avatar" src={avatar}></img>
						)}
						<p className={classNames(response.type)}>{response.message}</p>
					</li>
				);
			})}
			{loading && <Loading></Loading>}
		</ul>
	);
}

export default ResponsesList;
