import { doc, deleteDoc } from "firebase/firestore";
import db from "../../firebase";
import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import Modal from "../Modal";
import "./DeleteRoomModal.css";

const DeleteRoomModal = () => {

  const { activeRoom, setActiveRoom, deleteRoomModalVisible, setDeleteRoomModalVisible } = useGlobalContext();
  const { activeTheme } = useThemeContext();

  const handleDelete = async () => {
    await deleteDoc(doc(db, "rooms", activeRoom.id));
    setDeleteRoomModalVisible(false);
    setActiveRoom(null);
  };

  return (
    deleteRoomModalVisible
    ? <Modal title="Delete room" handleCloseClick={() => setDeleteRoomModalVisible(prev => !prev)}>
        <div className="delete-room-modal" style={{backgroundColor: activeTheme.bg0}}>
          <span>Are you sure, wanna delete room <code style={{backgroundColor: activeTheme.bg1}}>{activeRoom.name}</code>?</span>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: activeTheme.red0,
              color: activeTheme.bg0
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
    : <></>
  );

};

export default DeleteRoomModal;