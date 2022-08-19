import { Navigate } from 'react-router-dom';
import SplitPane from "react-split-pane";
import { useGlobalContext } from './GlobalContext';
import { useThemeContext } from './ThemeContext';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import CreateNewRoomModal from './components/CreateNewRoomModal';
import DeleteRoomModal from './components/DeleteRoomModal';
import './App.css';

function App() {

  const { user } = useGlobalContext();
  const { activeTheme } = useThemeContext();

  return (
    user===null || user===undefined
    ? <Navigate to="/login" />
    : <div className="App" style={{
        backgroundColor: activeTheme.bg0,
        color: activeTheme.fg0
      }}>
        <SplitPane split={"vertical"} minSize={300} maxSize={600} allowResize={true}>
          <Sidebar />
          <Chat />
        </SplitPane>
        <CreateNewRoomModal />
        <DeleteRoomModal />
      </div>
  )
}

export default App;
