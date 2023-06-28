import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const ProjectsCarousel = ({ children }) => {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={slider_wrapper}
      className="slider_container rounded py-4 overflow-hidden"
      whileTap={{ cursor: 'grabbing' }}
      whileHover={{ cursor: 'grab' }}
    >
      <motion.div
        className="flex gap-5"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCarousel;
