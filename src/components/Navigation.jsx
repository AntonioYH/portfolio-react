import { useGlobalStatesContext } from '../hooks/useGlobalStatesContext';

const Navigation = () => {
  const { navigation, setNavigation } = useGlobalStatesContext();

  return (
    <nav className={navigation ? 'nav-active' : 'nav-active nav-unactive'}>
      <ul
        onClick={() => setNavigation(false)}
        className="flex gap-8 text-white md:text-black text-lg dark:text-white"
      >
        <li className="lg:hover:translate-y-[-2px] lg:transition lg:hover:text-[#e2286c]">
          <a href="#Home">Home</a>
        </li>
        <li className="lg:hover:translate-y-[-2px] lg:transition lg:hover:text-[#e2286c]">
          <a href="#About">About Me</a>
        </li>
        <li className="lg:hover:translate-y-[-2px] lg:transition lg:hover:text-[#e2286c]">
          <a href="#Skills">Skills</a>
        </li>
        <li className="lg:hover:translate-y-[-2px] lg:transition lg:hover:text-[#e2286c]">
          <a href="#Projects">Projects</a>
        </li>
        <li className="lg:hover:translate-y-[-2px] lg:transition lg:hover:text-[#e2286c]">
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
