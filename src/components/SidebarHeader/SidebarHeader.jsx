import { useGlobalContext } from "../../GlobalContext";
import { Themes, useThemeContext } from "../../ThemeContext";
import { UserIcon, PlusIcon, LightningBoltIcon } from "../../assets/icons";
import "./SidebarHeader.css";

const SidebarHeader = () => {

  const { user, setCreateNewRoomModalVisible } = useGlobalContext();
  const { activeTheme, setActiveTheme, activeThemeIndex, setActiveThemeIndex } = useThemeContext();

  const firstName = (name) => {
    return name.split(' ')[0];
  };

  const handleThemeChange = () => {
    if (activeThemeIndex===Themes.length-1) setActiveTheme(Themes[0]);
    else setActiveTheme(Themes[activeThemeIndex+1]);
    setActiveThemeIndex(i => {
      if (i===Themes.length-1) return 0;
      return i+1;
    });
  };

  return (
    <div className="sidebar-header">
      <div className="sidebar-header-left">
        <UserIcon
          width={40}
          height={40}
        />
        <span className="username">{firstName(user)}</span>
      </div>
      <div className="sidebar-header-right">
        <span onClick={() => setCreateNewRoomModalVisible(prev => !prev)} style={{cursor: "pointer"}}>
          <PlusIcon
            width={40}
            height={40}
            strokeColor={activeTheme.green0}
          />
        </span>
        <span onClick={handleThemeChange} style={{cursor: "pointer"}}>
          <LightningBoltIcon
            width={40}
            height={40}
            strokeColor={activeTheme.yellow0}
          />
        </span>
      </div>
    </div>
  );

};

export default SidebarHeader;