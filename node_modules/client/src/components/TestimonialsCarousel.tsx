import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    text: 'Zoho Consultant transformed our business. Highly recommended!',
    company: 'Acme Corp.'
  },
  {
    name: 'Jane Smith',
    text: 'Professional, reliable, and expert Zoho solutions.',
    company: 'Beta Inc.'
  },
  {
    name: 'Sam Wilson',
    text: 'The best Zoho consulting team we have worked with.',
    company: 'Gamma LLC'
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const TestimonialsCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="w-full max-w-xl mx-auto py-12">
      <div className="relative h-48">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) paginate(-1);
              else if (info.offset.x < -100) paginate(1);
            }}
          >
            <p className="text-lg text-gray-700 mb-4">"{testimonials[testimonialIndex].text}"</p>
            <div className="font-semibold text-blue-600">{testimonials[testimonialIndex].name}</div>
            <div className="text-sm text-gray-400">{testimonials[testimonialIndex].company}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === testimonialIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setPage([idx, idx > testimonialIndex ? 1 : -1])}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 