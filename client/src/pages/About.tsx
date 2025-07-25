const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/70 rounded-xl shadow-lg p-10 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">About Us</h1>
          <p className="text-lg text-gray-300 mb-6 text-center max-w-3xl mx-auto">
            Crsel (Cloud Ready Solution for Enterprise Logic) provides innovative Zoho solutions to help businesses streamline operations, enhance productivity, and achieve digital transformation. Our team is dedicated to delivering expert consulting, seamless integrations, and ongoing support tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/70 rounded-lg p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-300">Empowering enterprises with cloud-ready, scalable, and efficient business solutions that drive growth and innovation.</p>
          </div>
          <div className="bg-gray-900/70 rounded-lg p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Values</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Customer-Centric Approach</li>
              <li>• Integrity & Transparency</li>
              <li>• Innovation & Excellence</li>
              <li>• Collaboration & Teamwork</li>
            </ul>
          </div>
          <div className="bg-gray-900/70 rounded-lg p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Why Choose Us?</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Experienced Zoho Solution Providers</li>
              <li>• Tailored Solutions for Every Business</li>
              <li>• End-to-End Support</li>
              <li>• Commitment to Your Success</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gray-800/70 rounded-xl shadow-lg p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Projects Delivered */}
            <div className="flex flex-col items-center justify-center bg-gray-900/70 rounded-lg p-6 shadow min-h-[18rem] aspect-square mx-auto">
              <span className="text-5xl text-blue-400 mb-4">🏆</span>
              <h3 className="text-xl font-semibold text-white mb-2">100+ Projects Delivered</h3>
              <p className="text-gray-300">Successfully implemented cloud solutions for clients across multiple industries.</p>
            </div>
            {/* Client Satisfaction */}
            <div className="flex flex-col items-center justify-center bg-gray-900/70 rounded-lg p-6 shadow min-h-[18rem] aspect-square mx-auto">
              <span className="text-5xl text-blue-400 mb-4">🌟</span>
              <h3 className="text-xl font-semibold text-white mb-2">98% Client Satisfaction</h3>
              <p className="text-gray-300">Consistently high ratings and positive feedback from our valued clients.</p>
            </div>
            {/* Years Experience */}
            <div className="flex flex-col items-center justify-center bg-gray-900/70 rounded-lg p-6 shadow min-h-[18rem] aspect-square mx-auto">
              <span className="text-5xl text-blue-400 mb-4">💼</span>
              <h3 className="text-xl font-semibold text-white mb-2">5+ Years Experience</h3>
              <p className="text-gray-300">A seasoned team with deep expertise in cloud and enterprise solutions.</p>
            </div>
            {/* International Work Units */}
            <div className="flex flex-col items-center justify-center bg-gray-900/70 rounded-lg p-6 shadow min-h-[18rem] aspect-square mx-auto md:col-span-1 lg:col-start-2">
              <span className="text-5xl text-blue-400 mb-4">🌍</span>
              <h3 className="text-xl font-semibold text-white mb-2">5+ International Work Units</h3>
              <p className="text-gray-300">Experience delivering solutions for clients in 5+ countries/regions.</p>
            </div>
            {/* Authentic Man Hours Work */}
            <div className="flex flex-col items-center justify-center bg-gray-900/70 rounded-lg p-6 shadow min-h-[18rem] aspect-square mx-auto md:col-span-1 lg:col-start-3">
              <span className="text-5xl text-blue-400 mb-4">⏱️</span>
              <h3 className="text-xl font-semibold text-white mb-2">1M+ Authentic Man Hours Work</h3>
              <p className="text-gray-300">Over one million verified man hours dedicated to client projects worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 