import React, { useState } from 'react';
import { Trophy, LogOut, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AUTH_LOGOUT_URL } from '../Services/apiConfig';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      name: 'Hackathon Registration', 
      icon: <Trophy size={20} />, 
      path: '/admin/admin-dashboard' 
    },
  ];

  const handleLogout = async () => {
    try {
      // 1. Call the Logout API
      await fetch(AUTH_LOGOUT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include token if required by your backend
          // 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth_data'))?.token}`
        }
      });
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // 2. CLEAR LOCAL STORAGE (Crucial Step)
      localStorage.clear(); 
      // Or specifically: localStorage.removeItem('auth_data');

      // 3. Redirect to login
      navigate('/hr/login');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0a0d14] text-white rounded-lg border border-white/10"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div className={`
        w-64 bg-[#0a0d14] h-screen fixed left-0 top-0 text-white flex flex-col border-r border-white/10 z-40
        transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-black tracking-tighter text-blue-500">API ADMIN</h2>
        </div>
        
        <nav className="flex-1 px-3 md:px-4 space-y-2">
          {menuItems.map((item) => {
            // Logic to keep Hackathon Registration selected by default
            const isActive = location.pathname === item.path || location.pathname === '/admin';
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT BUTTON */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl transition-all group"
          >
            <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;