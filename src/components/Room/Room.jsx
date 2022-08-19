import { UserIcon, GroupIcon } from "../../assets/icons";
import "./Room.css";

const Room = ({ name, lastMessageSentBy, lastMessageText, onClick, bg, fg, borderColor }) => {

	return (
		<div className="room" onClick={onClick} style={{
			backgroundColor: bg,
			color: fg,
			borderTop: `1px ${borderColor} solid`,
		}}>
			<GroupIcon width={30} height={30} strokeColor={fg} />
			<div className="room-info">
				<span className="name">{name}</span>
				<div className="room-last-message">
					<span className="sent-by">{lastMessageSentBy}: </span>
					<span className="message-text">{lastMessageText}</span>
				</div>
			</div>
		</div>
	);

};

export default Room;