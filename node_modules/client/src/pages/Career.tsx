import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('skills', form.skills);
      formData.append('experienceYears', form.experienceYears);
      formData.append('experienceMonths', form.experienceMonths);
      if (form.cv) {
        formData.append('cv', form.cv);
      }

      const response = await axios.post('http://localhost:3000/api/career/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your application! We will get in touch soon.'
        });
        setForm({
          name: '',
          email: '',
          skills: '',
          experienceYears: '',
          experienceMonths: '',
          cv: null
        });
        setSubmitted(true);
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16">
      {/* Admin Button - Top Right */}
      <div className="absolute top-36 right-8 z-10">
        <Link
          to="/admin"
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors duration-200 border border-gray-600 hover:border-blue-400 rounded-md bg-gray-800/50 backdrop-blur-sm"
        >
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin
        </Link>
      </div>

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
                     {/* Status Message */}
           {submitStatus.type && (
             <div className={`p-3 rounded ${
               submitStatus.type === 'success' 
                 ? 'bg-green-100 text-green-700 border border-green-300' 
                 : 'bg-red-100 text-red-700 border border-red-300'
             }`}>
               {submitStatus.message}
             </div>
           )}

           <button
             type="submit"
             disabled={isSubmitting}
             className={`w-full font-semibold py-3 rounded transition-colors ${
               isSubmitting
                 ? 'bg-gray-400 cursor-not-allowed'
                 : 'bg-blue-600 hover:bg-blue-700'
             } text-white`}
           >
             {isSubmitting ? 'Submitting...' : 'Submit Application'}
           </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Career; 