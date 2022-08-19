import { useState } from "react";
import { doc, arrayUnion, updateDoc, Timestamp } from "firebase/firestore";
import db from "../../firebase";
import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import "./Input.css";
import { SendIcon } from "../../assets/icons";

const Input = () => {

	const { activeRoom, user } = useGlobalContext();
	const { activeTheme } = useThemeContext();
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (inputValue === "") return;
		
		const textValue = inputValue;
		setInputValue("");
		const activeRoomRef = doc(db, "rooms", activeRoom.id);
		await updateDoc(activeRoomRef, {
			messages: arrayUnion({
				sentBy: user,
				text: textValue,
				timestamp: Timestamp.now()
			}),
			lastMessage: {
				text: textValue,
				sentBy: user
			}
		});
	}

	return (
		<form className="input" onSubmit={handleSubmit} style={{
			backgroundColor: activeTheme.bg0
		}}>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				style={{
					backgroundColor: activeTheme.bg1,
					color: activeTheme.green0
				}}
			/>
			<button type="submit" style={{
				backgroundColor: activeTheme.bg1
			}}>
				<SendIcon width={40} height={40} strokeColor={activeTheme.yellow0} />
			</button>
		</form>
	);

};

export default Input;