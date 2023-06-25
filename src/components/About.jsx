import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="About"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(+200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="max-w-[730px] flex flex-col items-center justify-center gap-3"
    >
      <h2 className="dark:text-white">
        {'<About'}
        <span className="text-[#e2286c]">/</span>
        {'>'}
      </h2>
      <p className="about__p text-center md:text-[17px] dark:text-white">
        Hello!!! 😊, I'm a Venezuelan young guy, with grate goals and dreams at the
        incredible IT world, I have always loved solving problems on a logical way using
        programming languages since I started learning programming. I finished my studies
        at web development and I'd be so happy if I get new challenges in this IT world.
      </p>
    </section>
  );
};

export default About;

// Jerarquia de operadores
