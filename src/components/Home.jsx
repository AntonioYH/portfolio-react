import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="Home"
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="lg:py-3 mt-[70px] lg:mt-[80px] flex flex-col lg:flex-row lg:gap-32 justify-center gap-6 md:gap-3 items-center"
    >
      <div>
        <img
          src="https://res.cloudinary.com/du7xis1ny/image/upload/f_auto,q_auto/v1/my-portfolio-image/xqu5awlhqyxdtolo1nu0"
          alt="Antonio's picture"
          className="h-[300px] lg:h-[400px] rounded-full shadow-md shadow-black"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-4">
        <p className="font-semibold md:text-lg dark:text-white">Full-Stack Developer</p>
        <h2 className="Home__h2 text-3xl md:text-4xl font-light dark:text-white">
          Antonio Yustis
        </h2>
        <section className="flex text-3xl md:text-4xl gap-5 md:gap-7 dark:text-white">
          <div>
            <a href="https://www.linkedin.com/in/antonioyustis" target="_blank">
              <i className="lg:hover:text-[#e2286c] lg:transition fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a href="https://github.com/AntonioYH" target="_blank">
              <i className="lg:hover:text-[#e2286c] lg:transition fa-brands fa-github"></i>
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1bUiEbQ0R4vDtMui42pz8ufNZL22I8fCs/view?usp=drive_link"
              target="_blank"
            >
              <i className="lg:hover:text-[#e2286c] lg:transition hover:cursor-pointer fa-solid fa-file"></i>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
