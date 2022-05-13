import "./App.css";
import Form from "./Components/Form";
import ResponsesList from "./Components/ResponsesList";
import { useState } from "react";

function App() {
	const [responses, setResponses] = useState([]);
	const [bot, setBot] = useState("polite");
	return (
		<div className="App">
			<ResponsesList responses={responses}></ResponsesList>
			<Form setResponses={setResponses}></Form>
		</div>
	);
}

export default App;
