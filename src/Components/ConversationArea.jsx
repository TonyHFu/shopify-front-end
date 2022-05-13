import React from "react";
import Form from "./Form";
import ResponsesList from "./ResponsesList";
import "./styles/ConversationArea.scss";

function ConversationArea(props) {
	const {
		responses,
		setResponses,
		loading,
		setLoading,
		bots,
		selectedBot,
		setSelectedBot,
	} = props;
	return (
		<div id="conversation-area">
			<ResponsesList responses={responses} loading={loading}></ResponsesList>
			<Form
				setResponses={setResponses}
				setLoading={setLoading}
				bots={bots}
				selectedBot={selectedBot}
				setSelectedBot={setSelectedBot}
				responses={responses}
			></Form>
		</div>
	);
}

export default ConversationArea;
