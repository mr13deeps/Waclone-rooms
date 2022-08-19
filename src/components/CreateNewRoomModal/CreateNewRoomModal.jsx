import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import Modal from "../Modal";
import "./CreateNewRoomModal.css";
import db from "../../firebase";

const CreateNewRoomModal = () => {

  const { createNewRoomModalVisible, setCreateNewRoomModalVisible } = useGlobalContext();
  const { activeTheme } = useThemeContext();
  const [newRoomName, setNewRoomName] = useState("");

  const handleCreate = async (event) => {
    event.preventDefault();
    if (newRoomName==="") return;
    await addDoc(collection(db, "rooms"), {
      name: newRoomName,
      lastMessage: {
        text: "",
        sentBy: ""
      },
      messages: []
    });
    setNewRoomName("");
    setCreateNewRoomModalVisible(false);
  };

  return (
    createNewRoomModalVisible
    ? <Modal title="Create new room" handleCloseClick={() => setCreateNewRoomModalVisible(prev => !prev)}>
        <form className="create-new-room-modal" onSubmit={handleCreate} style={{
          backgroundColor: activeTheme.bg0,
          color: activeTheme.fg0
        }}>
          <div>
            <label>Room name</label>
            <input
              type="text"
              value={newRoomName}
              onChange={event => setNewRoomName(event.target.value)}
              style={{
                backgroundColor: activeTheme.bg1,
                color: activeTheme.green0,
                border: `1px ${activeTheme.green0} solid`
              }}
            />
          </div>
          <span>
            <button
              type="submit"
              style={{
                backgroundColor: activeTheme.bg1,
                color: activeTheme.green0,
                border: `1px ${activeTheme.green0} solid`
              }}
            >
              Create
            </button>
          </span>
        </form>
      </Modal>
    : <></>
  );

};

export default CreateNewRoomModal;