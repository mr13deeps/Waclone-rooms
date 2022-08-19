import { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import db from "../../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Room from "../Room";
import "./Rooms.css";

const Rooms = () => {

  const { activeRoom, setActiveRoom, rooms, setRooms } = useGlobalContext();
  const { activeTheme } = useThemeContext();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rooms"), (docs) => {
      const updatedRooms = [];
      docs.forEach(doc => {
        const data = doc.data();
        updatedRooms.push({
          id: doc.id,
          name: data.name,
          lastMessage: data.lastMessage,
        })
      });
      setRooms(updatedRooms);
    });

    return() => {unsubscribe()};
  }, []);

  return (
    <div className="rooms" style={{
      borderBottom: `1px ${activeTheme.blue0} solid`
    }}>
      {rooms.map((room) => {
        return <Room
                key={room.id}
                name={room.name}
                lastMessageSentBy={room.lastMessage.sentBy}
                lastMessageText={room.lastMessage.text}
                onClick={() => {
                  setActiveRoom(room);
                }}
                bg={activeRoom?.id===room.id ? activeTheme.blue0 : activeTheme.bg0}
                fg={activeRoom?.id===room.id ? activeTheme.bg0 : activeTheme.fg0}
                borderColor={activeTheme.blue0}
                />
      })}
    </div>
  );

};

export default Rooms;