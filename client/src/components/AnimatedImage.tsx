import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  initialScale?: number;
  hoverScale?: number;
  duration?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className = '',
  initialScale = 1,
  hoverScale = 1.05,
  duration = 0.3
}: AnimatedImageProps) => {
  return (
    <motion.div
      initial={{ scale: initialScale }}
      whileHover={{ scale: hoverScale }}
      transition={{ duration }}
      className="overflow-hidden rounded-xl"
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default AnimatedImage; 