import Navigation from './Navigation';
import { useGlobalStatesContext } from '../hooks/useGlobalStatesContext';
import returnColor from '../utils/returnColor';
import { motion } from 'framer-motion';

const Header = () => {
  const { navigation, setNavigation, darkMode } = useGlobalStatesContext();

  const toggleNav = () => setNavigation(!navigation);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2 }}
      className="w-full max-w-[1350px] px-4 md:px-10 lg:px-[70px] h-[60px] lg:h-[65px] z-10 fixed top-0 flex justify-between items-center"
    >
      <h1 className="header__h1 lg:hover:translate-y-[-3px] hover:cursor-pointer transition text-2xl md:text-3xl font-bold text-black dark:text-white">
        Antonio <span className="text-[#e2286c]">.</span>
      </h1>
      <button
        onClick={toggleNav}
        style={{ color: returnColor(navigation, darkMode) }}
        className=" absolute right-4 top-4 z-30 md:hidden transition-all"
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
      <Navigation />
    </motion.header>
  );
};

export default Header;
