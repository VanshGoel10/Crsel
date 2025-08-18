import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

interface Career {
  _id: string;
  name: string;
  email: string;
  skills: string;
  experienceYears: number;
  experienceMonths: number;
  cvFileName: string;
  createdAt: string;
  isRead: boolean;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'contacts' | 'careers'>('contacts');

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/contact/admin/submissions', {
        headers: {
          'x-admin-key': adminKey
        }
      });
      
      if (response.data.success) {
        setContacts(response.data.data);
        setError('');
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError('Invalid admin key');
        setIsAuthenticated(false);
      } else {
        setError('Failed to fetch contacts');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchCareers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/career/admin/applications', {
        headers: {
          'x-admin-key': adminKey
        }
      });
      
      if (response.data.success) {
        setCareers(response.data.data);
        setError('');
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError('Invalid admin key');
        setIsAuthenticated(false);
      } else {
        setError('Failed to fetch career applications');
      }
    }
  };

  const handleAuthenticate = () => {
    if (adminKey.trim()) {
      setIsAuthenticated(true);
      fetchContacts();
      fetchCareers();
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await axios.patch(`http://localhost:3000/api/contact/admin/submissions/${id}/read`, {}, {
        headers: {
          'x-admin-key': adminKey
        }
      });
      
      setContacts(prev => prev.map(contact => 
        contact._id === id ? { ...contact, isRead: true } : contact
      ));
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`http://localhost:3000/api/contact/admin/submissions/${id}`, {
          headers: {
            'x-admin-key': adminKey
          }
        });
        
        setContacts(prev => prev.filter(contact => contact._id !== id));
      } catch (error) {
        console.error('Failed to delete contact:', error);
      }
    }
  };

  const markCareerAsRead = async (id: string) => {
    try {
      await axios.patch(`http://localhost:3000/api/career/admin/applications/${id}/read`, {}, {
        headers: {
          'x-admin-key': adminKey
        }
      });
      
      setCareers(prev => prev.map(career => 
        career._id === id ? { ...career, isRead: true } : career
      ));
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const deleteCareer = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this career application?')) {
      try {
        await axios.delete(`http://localhost:3000/api/career/admin/applications/${id}`, {
          headers: {
            'x-admin-key': adminKey
          }
        });
        
        setCareers(prev => prev.filter(career => career._id !== id));
      } catch (error) {
        console.error('Failed to delete career application:', error);
      }
    }
  };

  const downloadCV = async (id: string, fileName: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/career/admin/applications/${id}/cv`, {
        headers: {
          'x-admin-key': adminKey
        },
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Failed to download CV:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 text-gray-300">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Access</h1>
            <div className="mb-4">
              <label htmlFor="adminKey" className="block text-gray-300 text-sm font-bold mb-2">
                Admin Key
              </label>
              <input
                type="password"
                id="adminKey"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
                placeholder="Enter admin key"
              />
            </div>
            <button
              onClick={handleAuthenticate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
            >
              Access Dashboard
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 text-gray-300">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
            <p className="text-xl text-gray-300 mb-6">
              Manage contact submissions and career applications
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'contacts'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Contact Submissions ({contacts.length})
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'careers'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Career Applications ({careers.length})
              </button>
            </div>
          </motion.div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <p className="mt-2">Loading data...</p>
            </div>
          ) : activeTab === 'contacts' ? (
            contacts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-xl text-gray-400">No contact submissions found</p>
              </div>
            ) : (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {contacts.map((contact) => (
                      <tr key={contact._id} className={contact.isRead ? 'opacity-75' : 'bg-blue-900/20'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          <a href={`mailto:${contact.email}`} className="hover:text-blue-400">
                            {contact.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                          {contact.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {formatDate(contact.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            contact.isRead 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {contact.isRead ? 'Read' : 'New'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          {!contact.isRead && (
                            <button
                              onClick={() => markAsRead(contact._id)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              Mark Read
                            </button>
                          )}
                          <button
                            onClick={() => deleteContact(contact._id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) ) : activeTab === 'careers' ? (
            careers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-xl text-gray-400">No career applications found</p>
              </div>
            ) : (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Skills
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Experience
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          CV
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {careers.map((career) => (
                        <tr key={career._id} className={career.isRead ? 'opacity-75' : 'bg-blue-900/20'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {career.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <a href={`mailto:${career.email}`} className="hover:text-blue-400">
                              {career.email}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                            {career.skills}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {career.experienceYears}y {career.experienceMonths}m
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <button
                              onClick={() => downloadCV(career._id, career.cvFileName)}
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              {career.cvFileName}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {formatDate(career.createdAt)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              career.isRead 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {career.isRead ? 'Read' : 'New'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            {!career.isRead && (
                              <button
                                onClick={() => markCareerAsRead(career._id)}
                                className="text-blue-400 hover:text-blue-300"
                              >
                                Mark Read
                              </button>
                            )}
                            <button
                              onClick={() => deleteCareer(career._id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );  
};

export default Admin;
