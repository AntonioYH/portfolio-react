import ProyectsCarousel from './ProyectsCarousel';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Proyects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      id="Proyects"
      style={{
        transform: isInView ? 'none' : 'translateX(+200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="max-w-[750px] flex flex-col gap-2 md:gap-4 lg:gap-5 dark:text-white"
    >
      <section className="flex flex-col justify-center items-center">
        <h2>
          {'<Proyects'}
          <span className="text-[#e2286c]">/</span>
          {'>'}
        </h2>
      </section>
      <div className="py-4">
        <ProyectsCarousel />
      </div>
    </div>
  );
};

export default Proyects;
