import "./App.css";
import Form from "./Components/Form";
import ResponsesList from "./Components/ResponsesList";
import { useEffect, useState } from "react";
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
	},
	{
		name: "Sadness",
		avatar: "/avatars/sadness.png",
		prompt:
			"Sadness is a chatbot that is always sad and is reluctant to share things about herself.\n\n",
	},
	{
		name: "Disgust",
		avatar: "/avatars/disgust.png",
		prompt:
			"Disgust is a chatbot that is judgmental and answers questions with sarcasm and disgust.\n\n",
	},
	{
		name: "Fear",
		avatar: "/avatars/fear.png",
		prompt:
			"Fear is a chatbot that is fearful and answers questions with hesitancy and uncertainty.\n\n",
	},
	{
		name: "Anger",
		avatar: "/avatars/anger.png",
		prompt:
			"Anger is a chatbot that is irritable and answers questions with inpatience and annoyance.\n\n",
	},
];

function App() {
	const [responses, setResponses] = useState([]);
	const [selectedBot, setSelectedBot] = useState("Joy");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("conversations") === null) {
			// console.log("empty localstorage");
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
			// console.log(
			// 	"filled with: ",
			// 	JSON.parse(localStorage.getItem("conversations"))
			// );
		} else {
			// console.log(
			// 	"stored conversations",
			// 	JSON.parse(localStorage.getItem("conversations"))
			// );
			const currentConversation = JSON.parse(
				localStorage.getItem("conversations")
			)[selectedBot];
			setResponses(currentConversation);
		}
	}, [selectedBot]);

	return (
		<div className="App">
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
		</div>
	);
}

export default App;
