import { useEffect } from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import { motion, useScroll, useSpring } from 'framer-motion';
import setDefaultSystemTheme from './utils/setDefaultSystemTheme';
import ToggleModeButton from './components/ToggleModeButton';
import { useGlobalStatesContext } from './hooks/useGlobalStatesContext';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { setDarkMode } = useGlobalStatesContext();

  useEffect(() => {
    setDefaultSystemTheme(setDarkMode);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col gap-4">
      <motion.div className="h-[63px] shadow-sm shadow-black lg:h-[68px] bg-[#FFFFFF] dark:bg-[#020001] flex flex-col items-center justify-center z-10 w-full fixed top-0">
        <Header />
        <motion.div
          className="w-full absolute bottom-0 h-[3px] bg-gray-950 origin-[0%] dark:bg-white"
          style={{
            scaleX,
          }}
        />
      </motion.div>
      <div className="flex justify-center">
        <main className="w-full max-w-[1110px] flex flex-col gap-10 lg:gap-14 px-4 py-4">
          <Home />
          <div className="flex justify-center">
            <About />
          </div>
          <Skills />
          <div className="md:flex md:justify-center">
            <Proyects />
          </div>
          <Contacts />
        </main>
      </div>
      <div className="border-t-[3px] border-black dark:border-white bg-[#FFFFFF] dark:bg-[#020001] flex justify-center">
        <Footer />
      </div>
      <ToggleModeButton />
    </div>
  );
}

export default App;
