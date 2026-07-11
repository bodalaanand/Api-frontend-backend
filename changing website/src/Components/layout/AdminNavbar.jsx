import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const AdminNavbar = () => {
  const authData = JSON.parse(localStorage.getItem('auth_data') || '{}');

  return (
    <nav className="h-16 bg-white border-b border-gray-100 fixed top-0 right-0 left-0 lg:left-64 z-10 px-4 md:px-8 flex items-center justify-end"> 
      {/* Changed justify-between to justify-end to push everything to the right */}
      
      <div className="flex items-center gap-6">
        {/* Profile Section */}
        <div className="flex items-center gap-2 md:gap-3 border-l pl-4 md:pl-6 border-gray-100">
          <div className="text-right">
            <p className="text-[10px] md:text-xs font-black text-gray-900 uppercase">
              {authData.userId || 'Admin'}
            </p>
            <p className="text-[8px] md:text-[10px] text-blue-600 font-bold tracking-wider">
              {authData.role || 'HR'}
            </p>
          </div>
          <div className="bg-gray-50 p-1 rounded-full">
            <UserCircle size={32} className="text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;