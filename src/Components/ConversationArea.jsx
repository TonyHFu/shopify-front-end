import React from "react";
import Form from "./Form";
import ResponsesList from "./ResponsesList";
import "./styles/ConversationArea.scss";

function ConversationArea(props) {
	const { responses, setResponses, loading, setLoading } = props;
	return (
		<div id="conversation-area">
			<ResponsesList responses={responses} loading={loading}></ResponsesList>
			<Form setResponses={setResponses} setLoading={setLoading}></Form>
		</div>
	);
}

export default ConversationArea;
