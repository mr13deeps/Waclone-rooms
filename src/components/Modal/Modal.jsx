import { useThemeContext } from "../../ThemeContext";
import { CloseIcon } from "../../assets/icons";
import "./Modal.css";

const Modal = ({ title, handleCloseClick, children }) => {

  const { activeTheme } = useThemeContext();

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-titlebar" style={{
          backgroundColor: activeTheme.bg0,
          color: activeTheme.fg0,
        }}>
          <span className="modal-title">{title}</span>
          <span className="modal-close" onClick={handleCloseClick}><CloseIcon width={30} height={30} /></span>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );

};

export default Modal;