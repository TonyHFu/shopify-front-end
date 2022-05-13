import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./styles/Form.scss";

const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_SECRET,
});

const openai = new OpenAIApi(configuration);

function Form(props) {
	const { setResponses, setLoading } = props;

	const [prompt, setPrompt] = useState("");

	const handleChange = e => {
		e.preventDefault();
		setPrompt(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		// try {
		// 	const tempPrompt = prompt;
		// 	setPrompt("");
		// 	setResponses(prev => [
		// 		...prev,
		// 		{
		// 			type: "prompt",
		// 			message: tempPrompt,
		// 		},
		// 	]);
		// 	const completion = await openai.createCompletion("text-curie-001", {
		// 		prompt: tempPrompt,
		// 		temperature: 0.5,
		// 	});
		// 	const completionSentence = completion.data.choices[0].text;
		// 	console.log(completionSentence);

		// 	setResponses(prev => [
		// 		...prev,
		// 		{
		// 			type: "response",
		// 			message: completionSentence,
		// 		},
		// 	]);
		// } catch (error) {
		// 	if (error.response) {
		// 		console.log(error.response.status);
		// 		console.log(error.response.data);
		// 	} else {
		// 		console.log(error.message);
		// 	}
		// }

		const tempPrompt = prompt;
		setPrompt("");
		setResponses(prev => [
			...prev,
			{
				type: "prompt",
				message: tempPrompt,
			},
		]);

		setLoading(true);
		openai
			.createCompletion("text-curie-001", {
				prompt: tempPrompt,
				temperature: 0.5,
			})
			.then(completion => {
				const completionSentence = completion.data.choices[0].text;
				console.log(completionSentence);

				setResponses(prev => [
					...prev,
					{
						type: "response",
						message: completionSentence,
					},
				]);
				setLoading(false);
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.data);
				} else {
					console.log(error.message);
				}
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <label htmlFor="prompt">Prompt: </label> */}
			<input
				type="text"
				name="prompt"
				onChange={handleChange}
				value={prompt}
			></input>
			<button type="submit" id="submit-prompt">
				<i class="fa-solid fa-paper-plane"></i>
			</button>
		</form>
	);
}

export default Form;
