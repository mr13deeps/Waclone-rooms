import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import "./Message.css";

const Message = ({ text, sentBy, timestamp }) => {

	const { user } = useGlobalContext();
	const { activeTheme } = useThemeContext();

	const timestampToStr = (timestamp) => {
		const newDate = new Date();
		newDate.setTime(timestamp.seconds*1000);
		return newDate.toLocaleTimeString();
	};
  
	return (
		<div className={`message ${sentBy===user ? "position-right" : ""}`} style={{
			backgroundColor: sentBy===user ? activeTheme.blue0 : activeTheme.bg1,
			color: sentBy===user ? activeTheme.bg0 : activeTheme.fg0
		}}>
			<span className="message-sent-by">{sentBy}</span>
			<span className="message-text">{text}</span>
			<span className="message-timestamp">{timestampToStr(timestamp)}</span>
		</div>
	);

};

export default Message;