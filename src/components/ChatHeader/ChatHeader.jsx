import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import { GroupIcon, UserIcon, TrashIcon } from "../../assets/icons";
import "./ChatHeader.css";

const ChatHeader = () => {

  const { activeRoom, setDeleteRoomModalVisible } = useGlobalContext();
  const { activeTheme } = useThemeContext();

	return (
		<div className="chat-header" style={{
      backgroundColor: activeTheme.bg1
    }}>
      <div className="chat-header-left">
        <GroupIcon
          width={40}
          height={40}
          strokeColor={activeTheme.yellow0}
        />
        {activeRoom!==null && <span className="chat-room-name" style={{color: activeTheme.blue0}}>{activeRoom.name}</span>}
      </div>
      <div className="chat-header-right">
        <span onClick={() => setDeleteRoomModalVisible(prev => !prev)} style={{cursor: "pointer"}}>
          <TrashIcon
            width={40}
            height={40}
            strokeColor={activeTheme.red0}
          />
        </span>
      </div>
    </div>
	);

};

export default ChatHeader;