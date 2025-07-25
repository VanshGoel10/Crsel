import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const services = [
    {
      title: 'Zoho CRM Implementation',
      description: 'Custom CRM solutions to manage customer relationships effectively',
      icon: '📊',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support']
    },
    {
      title: 'Zoho Books',
      description: 'Comprehensive accounting and financial management',
      icon: '💰',
      features: ['Invoicing', 'Expense Tracking', 'Financial Reports']
    },
    {
      title: 'Zoho People',
      description: 'HR management and employee engagement solutions',
      icon: '👥',
      features: ['Attendance Management', 'Performance Tracking', 'Employee Portal']
    },
    {
      title: 'Zoho Projects',
      description: 'Project management and collaboration tools',
      icon: '📋',
      features: ['Task Management', 'Time Tracking', 'Team Collaboration']
    },
    {
      title: 'Zoho Analytics',
      description: 'Business intelligence and reporting solutions',
      icon: '📈',
      features: ['Data Visualization', 'Custom Reports', 'Real-time Analytics']
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems',
      icon: '🔌',
      features: ['API Development', 'Third-party Integration', 'Data Migration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive Zoho solutions to transform your business operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden text-center"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 text-indigo-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="mr-2 text-indigo-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-700/50 backdrop-blur-sm px-6 py-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 