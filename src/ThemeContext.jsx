import { createContext, useContext, useState } from "react";
import { OneDark, Urple,GruvboxDark,Jellybeans,Ocean,Wombat } from "./Themes";

const Themes = [
  OneDark,
  Urple,
  GruvboxDark,
  Jellybeans,
  Ocean,
  Wombat,
];

const ThemeContextDefaultValue = {
  activeThemeIndex: 0,
  activeTheme: OneDark,
};
const ThemeContext = createContext(ThemeContextDefaultValue);

const ThemeContextProvider = ({ children }) => {

  const [activeThemeIndex, setActiveThemeIndex] = useState(ThemeContextDefaultValue.activeThemeIndex);
  const [activeTheme, setActiveTheme] = useState(ThemeContextDefaultValue.activeTheme);

  return (
    <ThemeContext.Provider value={{
      activeThemeIndex, setActiveThemeIndex,
      activeTheme, setActiveTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );

};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context===undefined || context===null) {
    throw new Error("useThemeContext() can only be used inside of ThemeContextProvider.");
  }
  return context;
};

export {
  ThemeContextProvider,
  useThemeContext,
  Themes
};