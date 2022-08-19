import { createContext, useContext, useState } from "react";

const GlobalContextDefaultValue = {
	user: null,
	rooms: [],
	activeRoom: null,
	createNewRoomModalVisible: false,
	deleteRoomModalVisible: false,
};
const GlobalContext = createContext(GlobalContextDefaultValue);

const GlobalContextProvider = ({ children }) => {

	const [user, setUser] = useState(GlobalContextDefaultValue.user);
	const [rooms, setRooms] = useState(GlobalContextDefaultValue.rooms);
	const [activeRoom, setActiveRoom] = useState(GlobalContextDefaultValue.activeRoom);
	const [createNewRoomModalVisible, setCreateNewRoomModalVisible] = useState(GlobalContextDefaultValue.createNewRoomModalVisible);
	const [deleteRoomModalVisible, setDeleteRoomModalVisible] = useState(GlobalContextDefaultValue.deleteRoomModalVisible);

	return (
		<GlobalContext.Provider value={{
			user, setUser,
			rooms, setRooms,
			activeRoom, setActiveRoom,
			createNewRoomModalVisible, setCreateNewRoomModalVisible,
			deleteRoomModalVisible, setDeleteRoomModalVisible,
		}}>
			{children}
		</GlobalContext.Provider>
	);

};

const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (context===null || context===undefined) {
		throw new Error("useGlobalContext() can only be used inside GlobalContextProvider.");
	}
	return context;
};

export {
	GlobalContextProvider,
	useGlobalContext
};