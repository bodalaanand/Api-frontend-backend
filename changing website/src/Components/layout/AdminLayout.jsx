import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/AdminNavbar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <Navbar />
      <main className="pl-0 lg:pl-64 pt-16">
        <div className="p-4 md:p-8">
          <Outlet /> {/* This is where the specific admin pages will render */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;