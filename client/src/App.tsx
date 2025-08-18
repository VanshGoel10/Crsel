import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import Career from './pages/Career';
import Admin from './pages/Admin';

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

function App() {
  const [health, setHealth] = useState<string>('');
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://crsel-server.vercel.app/api';

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/health`);
        setHealth(response.data.status);
      } catch (error) {
        console.error('Error checking health:', error);
        setHealth('error');
      }
    };

    checkHealth();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;
