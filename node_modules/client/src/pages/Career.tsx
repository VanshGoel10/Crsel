import { motion } from 'framer-motion';
import { useState } from 'react';

const Career = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    skills: '',
    experienceYears: '',
    experienceMonths: '',
    cv: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission (e.g., send to backend)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Career Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our team and help us build the future of business solutions!<br />
            Explore open positions and grow your career with Crsel.
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-200 font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2" htmlFor="skills">Skills in Zoho</label>
            <textarea
              id="skills"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="experienceYears">Experience (years)</label>
              <input
                type="number"
                id="experienceYears"
                name="experienceYears"
                value={form.experienceYears}
                onChange={handleChange}
                min="0"
                required
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="experienceMonths">Experience (months)</label>
              <input
                type="number"
                id="experienceMonths"
                name="experienceMonths"
                value={form.experienceMonths}
                onChange={handleChange}
                min="0"
                max="11"
                required
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2" htmlFor="cv">CV (PDF, DOC, DOCX)</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors"
          >
            Submit Application
          </button>
          {submitted && (
            <div className="text-green-400 text-center mt-4">Thank you for applying! We will get in touch soon.</div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Career; 