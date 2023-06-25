import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const ProyectsCarousel = () => {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={slider_wrapper}
      className="overflow-hidden"
      whileTap={{ cursor: 'grabbing' }}
      whileHover={{ cursor: 'grab' }}
    >
      <motion.div
        className="flex gap-7"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <motion.div className="item"></motion.div>
        <motion.div className="item"></motion.div>
        <motion.div className="item"></motion.div>
        <motion.div className="item"></motion.div>
        <motion.div className="item"></motion.div>
        <motion.div className="item"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProyectsCarousel;
