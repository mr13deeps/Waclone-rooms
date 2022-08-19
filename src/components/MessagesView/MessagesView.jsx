import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import db from "../../firebase";
import { useGlobalContext } from "../../GlobalContext";
import Message from "../Message";
import "./MessagesView.css";

const MessagesView = () => {

	const { activeRoom } = useGlobalContext();
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(doc(db, "rooms", activeRoom.id), (doc) => {
			setMessages(doc.data().messages);
		});

		return() => {unsubscribe()};
	}, [activeRoom]);

	return (
		<div className="messages-view">
			{/* <div className="messages-wrapper-wrapper"> */}
				<div className="messages-wrapper">
					{messages.map((message, id) => {
						return <Message
											key={id}
											sentBy={message.sentBy}
											text={message.text}
											timestamp={message.timestamp}
										/>
					})}
				</div>
			{/* </div> */}
		</div>
	);

};

export default MessagesView;