import classNames from "classnames";
import React from "react";
import Loading from "./Loading";
import "./styles/ResponsesList.scss";

function ResponsesList(props) {
	const { responses, loading, bots, selectedBot } = props;

	const { avatar, primaryColor, secondaryColor } = bots.filter(
		bot => bot.name === selectedBot
	)[0];
	return (
		<ul id="messages">
			{loading && <Loading></Loading>}
			{responses
				.slice()
				.reverse()
				.map((response, i) => {
					return (
						<li key={i} className={classNames(response.type)}>
							{response.type === "response" && (
								<img
									className="message-avatar"
									src={avatar}
									alt={`${selectedBot} avatar`}
								></img>
							)}
							{response.type === "response" && (
								<p
									className={classNames(response.type)}
									style={{
										backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
									}}
								>
									{response.message}
								</p>
							)}
							{response.type === "prompt" && (
								<p className={classNames(response.type)}>{response.message}</p>
							)}
						</li>
					);
				})}
		</ul>
	);
}

export default ResponsesList;
