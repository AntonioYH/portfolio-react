import { useGlobalStatesContext } from '../hooks/useGlobalStatesContext';
import toggleMode from '../utils/toggleMode';
import { motion } from 'framer-motion';

const ToggleModeButton = () => {
  const { darkMode, setDarkMode } = useGlobalStatesContext();

  return (
    <motion.button
      initial={{ y: +200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        transition: 'all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      onClick={() => toggleMode(darkMode, setDarkMode)}
      className="w-[50px] z-50 h-[50px] bg-[#242424] shadow shadow-black dark:bg-[#F2F2F2] border-[3px] border-black dark:border-[#DCDCDC] fixed bottom-3 md:bottom-[90px] right-4 rounded-full"
    >
      {darkMode === 'light' && <i className="fa-regular fa-moon text-white"></i>}
      {darkMode === 'dark' && <i className="fa-regular fa-sun"></i>}
    </motion.button>
  );
};

export default ToggleModeButton;
