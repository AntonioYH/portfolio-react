import { motion, useInView } from 'framer-motion';
import ProjectsCarousel from './ProjectsCarousel';
import { useRef } from 'react';
import { nodeProjects } from '../utils/nodeProjects';
import ProjectCard from './ProjectCard';

const NodeProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={ref}
      className="py-4"
    >
      <div className="pb-4 flex justify-center">
        <h3 className="text-xl">
          {'<Node'}
          <span className="text-[#e2286c]">/</span>
          {'>'}
        </h3>
      </div>
      <ProjectsCarousel>
        {nodeProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ProjectsCarousel>
    </div>
  );
};

export default NodeProjects;
