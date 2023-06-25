import { useContext } from 'react';
import { GlobalStatesContext } from '../contexts/GlobalStatesContext';

export const useGlobalStatesContext = () => {
  const { navigation, setNavigation, darkMode, setDarkMode } =
    useContext(GlobalStatesContext);

  return { navigation, setNavigation, darkMode, setDarkMode };
};
