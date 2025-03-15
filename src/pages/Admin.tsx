import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, User, LogOut } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Simulate checking session (replace with actual authentication logic)
    const storedSession = localStorage.getItem('adminSession');
    if (storedSession) {
      setSession(true);
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    // Simulated contact fetching (replace with API call if needed)
    const mockContacts: Contact[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', message: 'Hello!', created_at: new Date().toISOString() },
    ];
    setContacts(mockContacts);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      localStorage.setItem('adminSession', 'true');
      setSession(true);
      fetchContacts();
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    setSession(false);
    navigate('/');
  };

  if (!session) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-24 pb-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md bg-gray-700 border-gray-600 text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md bg-gray-700 border-gray-600 text-white" required />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2">
                <User className="h-4 w-4" />
                <span>{loading ? 'Logging in...' : 'Login'}</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Contact Messages
          </h2>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <motion.div key={contact.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{contact.name}</h3>
                  <span className="text-sm text-gray-400">{new Date(contact.created_at).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{contact.email}</p>
                <p className="text-gray-100">{contact.message}</p>
              </motion.div>
            ))}
            {contacts.length === 0 && <p className="text-gray-400 text-center py-4">No messages received yet.</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Admin;
