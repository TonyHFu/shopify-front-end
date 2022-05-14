import "./App.scss";
import React, { useEffect, useState } from "react";
import ConversationArea from "./Components/ConversationArea";
import Choose from "./Components/Choose";

const fixture = [
	{ type: "prompt", message: "Tell me a bedtime story" },
	{
		type: "response",
		message: "Once upon a time, there was a princess who loved to sleep.",
	},
	{
		type: "prompt",
		message: "dfdnfjdn",
	},
	{
		type: "response",
		message: "sorry I couldn't understand that",
	},
];

const bots = [
	{
		name: "Joy",
		avatar: "/avatars/joy.png",
		prompt:
			"Joy is a chatbot that answers questions with enthusiasm and positivity.\n\n",
		primaryColor: "rgb(255, 218, 150)",
		secondaryColor: "rgb(251, 195, 158)",
	},
	{
		name: "Sadness",
		avatar: "/avatars/sadness.png",
		prompt:
			"Sadness is a chatbot that is always sad and is reluctant to share things about herself.\n\n",
		primaryColor: "rgb(158, 194, 251)",
		secondaryColor: "rgb(158, 211, 251)",
	},
	{
		name: "Disgust",
		avatar: "/avatars/disgust.png",
		prompt:
			"Disgust is a chatbot that is judgmental and answers questions with sarcasm and disgust.\n\n",
		primaryColor: "rgb(158, 251, 189)",
		secondaryColor: "rgb(197, 251, 158)",
	},
	{
		name: "Fear",
		avatar: "/avatars/fear.png",
		prompt:
			"Fear is a chatbot that is fearful and answers questions with hesitancy and uncertainty.\n\n",
		primaryColor: "rgb(255, 162, 233)",
		secondaryColor: "rgb(244, 162, 255)",
	},
	{
		name: "Anger",
		avatar: "/avatars/anger.png",
		prompt:
			"Anger is a chatbot that is irritable and answers questions with inpatience and annoyance.\n\n",
		primaryColor: "rgb(255, 162, 162)",
		secondaryColor: "rgb(251, 195, 158)",
	},
];

const ThemeContext = React.createContext("Joy");

function App() {
	const [responses, setResponses] = useState([]);
	const [selectedBot, setSelectedBot] = useState("Joy");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("conversations") === null) {
			localStorage.setItem(
				"conversations",
				JSON.stringify({
					Joy: [],
					Sadness: [],
					Fear: [],
					Disgust: [],
					Anger: [],
				})
			);
		} else {
			const currentConversation = JSON.parse(
				localStorage.getItem("conversations")
			)[selectedBot];
			setResponses(currentConversation);
		}
	}, [selectedBot]);

	return (
		<div className="App">
			<ThemeContext.Provider value={selectedBot}>
				<Choose
					bots={bots}
					setSelectedBot={setSelectedBot}
					selectedBot={selectedBot}
				></Choose>
				<ConversationArea
					responses={responses}
					loading={loading}
					setResponses={setResponses}
					setLoading={setLoading}
					bots={bots}
					selectedBot={selectedBot}
					setSelectedBot={setSelectedBot}
				></ConversationArea>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
