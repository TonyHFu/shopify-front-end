import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_SECRET,
});

const openai = new OpenAIApi(configuration);

function Form(props) {
	const { setResponses } = props;

	const [prompt, setPrompt] = useState("");

	const handleChange = e => {
		e.preventDefault();
		setPrompt(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const tempPrompt = prompt;
			setPrompt("");
			const completion = await openai.createCompletion("text-curie-001", {
				prompt: tempPrompt,
				temperature: 0.5,
			});
			const completionSentence = completion.data.choices[0].text;
			console.log(completionSentence);

			setResponses(prev => [...prev, completionSentence]);
		} catch (error) {
			if (error.response) {
				console.log(error.response.status);
				console.log(error.response.data);
			} else {
				console.log(error.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="prompt">Prompt: </label>
			<input
				type="text"
				name="prompt"
				onChange={handleChange}
				value={prompt}
			></input>
			<input type="submit" value="Submit"></input>
		</form>
	);
}

export default Form;
