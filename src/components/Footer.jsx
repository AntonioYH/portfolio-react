const Footer = () => {
  return (
    <footer className="w-full max-w-[1350px] md:min-h-[80px] lg:min-h-[85px] py-4 md:px-7 lg:px-12 text-black dark:text-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
      <p className="footer__p text-xl">
        2023 <span className="text-[#e2286c]">/</span> Antonio Yustis
      </p>
      <div className="flex gap-2 justify-center items-center">
        <p className="font-medium lg:text-lg">Developed with a lot of ❤️ &</p>
        <i className="fa-brands fa-react text-3xl text-[#00D1F7]"></i>
      </div>
      <section className="flex text-3xl gap-5 lg:gap-6">
        <div>
          <a href="https://www.linkedin.com/in/antonioyustis" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/AntonioYH" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1hDQoUuM8GlddCUlI179D2TNLJucctre1"
            target="_blank"
          >
            <i className="fa-solid fa-file"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
