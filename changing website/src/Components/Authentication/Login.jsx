import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff, Lock, User, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN_URL } from '../Services/apiConfig';

const DEMO_ADMIN_CREDENTIALS = {
  userId: 'admin',
  password: 'admin123'
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      userId: formData.userId,
      password: formData.password,
      mailId: ""
    };

    try {
      const response = await axios.post(AUTH_LOGIN_URL, payload);

      if (response.status === 200 || response.status === 201) {
        const userData = {
          userId: response.data.userId || "ADMIN",
          token: response.data.token,
          role: response.data.role || "HR"
        };

        localStorage.setItem("UserId", userData.userId);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("token", userData.token);
        localStorage.setItem("auth_data", JSON.stringify(userData));

        toast.success('Login Successful!');
        navigate('/admin');

        setTimeout(() => {
          window.location.href = '/admin';
        }, 1500);
      }
    } catch (error) {
      const isDemoCredentials =
        formData.userId.trim().toLowerCase() === DEMO_ADMIN_CREDENTIALS.userId &&
        formData.password === DEMO_ADMIN_CREDENTIALS.password;

      if (isDemoCredentials) {
        const userData = {
          userId: 'ADMIN',
          token: 'demo-token',
          role: 'HR'
        };

        localStorage.setItem('UserId', userData.userId);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('token', userData.token);
        localStorage.setItem('auth_data', JSON.stringify(userData));

        toast.success('Demo login successful!');
        navigate('/admin');
        setTimeout(() => {
          window.location.href = '/admin';
        }, 500);
        return;
      }

      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || 'Authentication Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header/Logo Section */}
        <div className="bg-[#0a0d14] p-8 text-center">
          <h1 className="text-white text-2xl font-black tracking-tighter">API TECHNOLOGIES</h1>
          <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Admin Portal Access</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500">Please enter your credentials</p>
          </div>

          {/* User ID Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">User ID</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                required
                name="userId"
                type="text"
                placeholder="Enter User ID"
                value={formData.userId}
                onChange={handleChange}
                className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                required
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10 focus:border-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Demo login: <span className="font-semibold text-gray-700">admin</span> / <span className="font-semibold text-gray-700">admin123</span></p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0a0d14] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AUTHENTICATING...
              </span>
            ) : (
              <>
                LOGIN TO PORTAL
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="p-6 bg-gray-50 border-t text-center">
          <p className="text-xs text-gray-400 font-medium italic">
            Authorized Personnel Only • API Technologies © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;