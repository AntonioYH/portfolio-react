import { useInView } from 'framer-motion';
import ProjectsCarousel from './ProjectsCarousel';
import { useRef } from 'react';
import { reactProjects } from '../utils/reactProjects';
import ProjectCard from './ProjectCard';

const ReactProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      style={{
        transform: isInView ? 'none' : 'translateX(+200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={ref}
      className="py-4"
    >
      <div className="pb-4 flex justify-center">
        <h2 className="text-xl">
          {'<React'}
          <span className="text-[#e2286c]">/</span>
          {'>'}
        </h2>
      </div>
      <ProjectsCarousel>
        {reactProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ProjectsCarousel>
    </div>
  );
};

export default ReactProjects;
