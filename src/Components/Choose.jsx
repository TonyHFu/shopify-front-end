import React from "react";
import "./styles/Choose.scss";

function Choose(props) {
	const { bots } = props;
	return (
		<div>
			<h2>Choose who you want to chat with!</h2>
			<ul id="bots-list">
				{bots.map(bot => {
					return (
						<li className="bot-list-item">
							<p>{bot.name}</p>
							<img src={bot.avatar}></img>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Choose;
