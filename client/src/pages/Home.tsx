import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedImage from '../components/AnimatedImage';
import ParallaxSection from '../components/ParallaxSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Dynamic background with gradient overlay */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-teal-900/50 animate-gradient" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Modern workspace background"
            className="w-full h-full object-cover opacity-20 select-none pointer-events-none"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Animated particles background */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 z-0 w-full h-full">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Modern workspace"
              className="w-full h-full brightness-50 object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </ParallaxSection>

        {/* Hero content */}
        <motion.div
          className="relative z-10 text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 mb-6"
            >
              Transform Your Business<br />with Zoho Solutions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
            >
              We craft digital experiences that elevate your brand and drive meaningful connections
              with your audience.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Services Preview Section */}
      <div className="w-full py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               {
                title: 'Zoho One',
                description: 'A complete suite of business applications',
                icon: '📦',
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Zoho CRM',
                description: 'Manage your customer relationships and sales processes efficiently',
                icon: '📊',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Zoho Desk',
                description: 'Provide excellent customer support and streamline service operations',
                icon: '🎧',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Zoho Projects',
                description: 'Plan, track, and collaborate on your projects with ease',
                icon: '📋',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Zoho Books',
                description: 'Simplify your accounting and manage your finances',
                icon: '📚',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Zoho Campaigns',
                description: 'Create, send, and track engaging email campaigns',
                icon: '📧',
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Zoho Analytics',
                description: 'Transform your data into actionable insights with powerful reports and dashboards',
                icon: '📈',
                color: 'from-yellow-500 to-yellow-600'
              },
               {
                title: 'Zoho Flow',
                description: 'Automate your business workflows and connect apps',
                icon: '🤖',
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Zoho Creator',
                description: 'Build custom applications to fit your unique business needs',
                icon: '🛠️',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                title: 'Zoho Payroll',
                description: 'Streamline payroll processing and ensure compliance',
                icon: '💰',
                color: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Zoho SalesIQ',
                description: 'Engage website visitors and convert leads with live chat',
                icon: '💬',
                color: 'from-lime-500 to-lime-600'
              },
              {
                title: 'Zoho People',
                description: 'Manage your human resources and employee data',
                icon: '🧑‍💼',
                color: 'from-blue-gray-500 to-blue-gray-600'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 hover:shadow-2xl transition-all duration-300 text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="w-full py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Innovative Solutions',
                description: 'Cutting-edge technology solutions tailored to your needs',
                icon: '✨',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
              },
              {
                title: 'Expert Team',
                description: 'Skilled professionals dedicated to your success',
                icon: '👥',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: 'Global Reach',
                description: 'Connect with audiences worldwide',
                icon: '🌍',
                image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-2xl bg-gray-800"
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AnimatedImage
                  src={feature.image}
                  alt={feature.title}
                  className="h-64 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-4xl mb-2 text-indigo-400">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-teal-900">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-white bg-gray-800/50 backdrop-blur-sm rounded-xl py-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold mb-2 text-indigo-400">{stat.number}</div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900">
        <TestimonialsCarousel />
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Home; 