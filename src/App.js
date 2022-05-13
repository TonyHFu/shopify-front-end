import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import ResponsesList from "./Components/ResponsesList";
import { useState } from "react";

function App() {
	const [responses, setResponses] = useState([]);
	return (
		<div className="App">
			<Form setResponses={setResponses}></Form>
			<ResponsesList responses={responses}></ResponsesList>
		</div>
	);
}

export default App;
