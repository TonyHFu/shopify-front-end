import "./App.css";
import Form from "./Components/Form";
import ResponsesList from "./Components/ResponsesList";
import { useState } from "react";
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
	{ name: "Joy", avatar: "/avatars/joy.png" },
	{ name: "Sadness", avatar: "/avatars/sadness.png" },
	{ name: "Disgust", avatar: "/avatars/disgust.png" },
	{ name: "Fear", avatar: "/avatars/fear.png" },
	{ name: "Anger", avatar: "/avatars/anger.png" },
];

function App() {
	const [responses, setResponses] = useState(fixture);
	const [selectedBot, setSelectedBot] = useState("polite");
	const [loading, setLoading] = useState(false);
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
			></ConversationArea>
		</div>
	);
}

export default App;
