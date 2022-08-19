import { useGlobalContext } from "../../GlobalContext";
import ChatHeader from "../ChatHeader";
import MessagesView from "../MessagesView";
import Input from "../Input";
import "./Chat.css";

const Chat = () => {

  const { activeRoom } = useGlobalContext();

  if (activeRoom===undefined || activeRoom===null) return <></>;

  return (
    <div className="chat">
      <ChatHeader />
      <MessagesView />
      <Input />
    </div>
  )

};

export default Chat;