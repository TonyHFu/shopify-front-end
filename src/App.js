import "./App.css";
import Form from "./Components/Form";
import ResponsesList from "./Components/ResponsesList";
import { useState } from "react";
import ConversationArea from "./Components/ConversationArea";

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

function App() {
	const [responses, setResponses] = useState(fixture);
	const [bot, setBot] = useState("polite");
	const [loading, setLoading] = useState(false);
	return (
		<div className="App">
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
