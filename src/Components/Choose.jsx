import classNames from "classnames";
import React from "react";
import "./styles/Choose.scss";

function Choose(props) {
	const { bots, selectedBot, setSelectedBot } = props;

	const handleSelect = currentBot => {
		setSelectedBot(currentBot);
	};
	return (
		<div id="choose">
			<h2>Choose who you want to chat with!</h2>
			<ul id="bots-list">
				{bots.map((bot, i) => {
					return (
						<li className="bot-list-item" key={i}>
							<p>{bot.name}</p>
							<img
								src={bot.avatar}
								className={classNames({ selected: bot.name === selectedBot })}
								onClick={() => handleSelect(bot.name)}
								alt={`${bot.name} avatar`}
							></img>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Choose;
