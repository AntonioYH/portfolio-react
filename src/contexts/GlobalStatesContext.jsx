import { useState } from 'react';
import { createContext } from 'react';

export const GlobalStatesContext = createContext();

export const GlobalStatesContextProvider = ({ children }) => {
  const [navigation, setNavigation] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.theme);

  return (
    <GlobalStatesContext.Provider
      value={{ navigation, setNavigation, darkMode, setDarkMode }}
    >
      {children}
    </GlobalStatesContext.Provider>
  );
};
