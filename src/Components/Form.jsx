import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./styles/Form.scss";
import useMeasure from "react-use-measure";

const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_SECRET,
});

const openai = new OpenAIApi(configuration);

function Form(props) {
	const { responses, setResponses, setLoading, bots, selectedBot } = props;

	const [prompt, setPrompt] = useState("");

	const handleChange = e => {
		e.preventDefault();
		setPrompt(e.target.value);
	};

	let botPrompt = bots.filter(bot => bot.name === selectedBot)[0].prompt;

	responses.forEach(response => {
		if (response.type === "prompt") {
			botPrompt += "You: " + response.message + "\n";
		}
		if (response.type === "response") {
			botPrompt += `${selectedBot}: ` + response.message + "\n";
		}
	});

	const handleKeyDown = e => {
		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};

	const handleClearHistory = e => {
		e.preventDefault();
		setResponses([]);
		const storedConversations = JSON.parse(
			localStorage.getItem("conversations")
		);

		storedConversations[selectedBot] = [];
		localStorage.setItem("conversations", JSON.stringify(storedConversations));
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const tempPrompt = prompt;
		setPrompt("");
		setResponses(prev => {
			const newResponses = [
				...prev,
				{
					type: "prompt",
					message: tempPrompt,
				},
			];
			return newResponses;
		});

		setLoading(true);

		botPrompt += "You: " + tempPrompt + `\n${selectedBot}:`;
		console.log("botPrompt before sending", botPrompt);
		openai
			.createCompletion("text-curie-001", {
				prompt: botPrompt,
				temperature: 0.5,
			})
			.then(completion => {
				const completionSentence = completion.data.choices[0].text;

				setResponses(prev => {
					const newResponses = [
						...prev,
						{
							type: "response",
							message: completionSentence,
						},
					];

					const storedConversations = JSON.parse(
						localStorage.getItem("conversations")
					);

					storedConversations[selectedBot] = newResponses;
					localStorage.setItem(
						"conversations",
						JSON.stringify(storedConversations)
					);

					return newResponses;
				});

				setLoading(false);

				return () => {};
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

	const { primaryColor } = bots.filter(bot => bot.name === selectedBot)[0];

	// Set textarea size
	const [ref, bounds] = useMeasure();
	const maxHeight = 5;

	let inputHeight;

	inputHeight = Math.min(
		maxHeight,
		Math.max(1, Math.ceil(prompt.length / bounds.width / 0.145))
	);

	return (
		<form onSubmit={handleSubmit}>
			<button
				id="clear-history"
				onClick={handleClearHistory}
				style={{ backgroundColor: primaryColor }}
			>
				Clear history
			</button>
			<textarea
				id="message-input"
				type="text"
				name="prompt"
				onChange={handleChange}
				value={prompt}
				ref={ref}
				style={{ height: inputHeight * 18 }}
				onKeyDown={handleKeyDown}
				placeholder="Say something! e.g. How are you feeling?"
			></textarea>
			<button type="submit" id="submit-prompt">
				<i
					className="fa-solid fa-paper-plane"
					style={{ color: primaryColor }}
				></i>
			</button>
		</form>
	);
}

export default Form;
